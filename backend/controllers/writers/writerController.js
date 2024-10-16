const knex = require('../../db/db.js');
const bcrypt = require("bcryptjs");
const { hashPassword } = require("../../utils/client/auth.utils");
const generateToken = require("../../utils/client/generateToken");
const { comparePassword } = require('../../utils/client/passwordUtiles.js');
const { createJWT } = require('../../utils/client/tokenUtils.js');

const addWriter = async (req, res) => {
    const { username, email, password, profile_pic } = req.body;

    try {
        console.log("Request received with body:", req.body);
        const existUser = await knex("users").where({ email }).first();
        if (existUser) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await hashPassword(password);
        console.log("Password hashed successfully");
        
        
        const role = await knex("roles").where({ name: 'writer' }).first();
        
        console.log(role, 'rolesss....................');
        if (!role) {
            // console.log("Role 'writers' does not exist");
            return res.status(400).json({ message: "Role 'writers' does not exist" });
        }

        const [newWriter] = await knex("users")
            .insert({
                // id: knex.raw("gen_random_uuid()"),
                username,
                email,
                password: hashedPassword,
                profile_pic: profile_pic || "https://www.gravatar.com/avatar/",
                role_id: role.id,
                balance: 0.00,
                created_at: knex.fn.now(),
                updated_at: knex.fn.now(),
            })
            .returning("*");

        if (newWriter) {

            const userWithRole = await knex("users")
                .select(
                    "users.id",
                    "users.username",
                    "users.email",
                    "users.profile_pic",
                    "roles.name as role",
                    "users.balance",
                    "users.created_at",
                    "users.updated_at"
                )
                .join("roles", "users.role_id", "roles.id")
                .where("users.id", newWriter.id)
                .first();

            // console.log("New writer created:", userWithRole);
            // generateToken(res, userWithRole.id);
            return res.status(201).json({ message: "Writer account created successfully", user: userWithRole });
        } else {
            // console.log("Writer account creation failed");
            return res.status(400).json({ message: "Writer account not created" });
        }
    } catch (error) {
        // console.error("Error during writer account creation:", error);
        return res.status(500).json({ message: "An error occurred during writer account creation" });
    }
};



// const loginWriter = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Retrieve user information including role name
//         const user = await knex("users")
//             .select(
//                 "users.id",
//                 "users.username",
//                 "users.email",
//                 "users.password",
//                 "users.profile_pic",
//                 "users.balance",
//                 "roles.name as role"
//             )
//             .join("roles", "users.role_id", "roles.id")
//             .where({ email })
//             .first();

//         // Check if user exists and password matches
//         if (user && (await bcrypt.compare(password, user.password))) {
//             // Generate token and set it in response cookie
//             generateToken(res, user.id);

//             // Return user information with login success message
//             return res.json({
//                 id: user.id,
//                 username: user.username,
//                 email: user.email,
//                 profile_pic: user.profile_pic,
//                 balance: user.balance,
//                 role: user.role,
//                 message: "Successfully logged in 😁",
//             });
//         } else {
//             // Handle invalid credentials
//             return res.status(401).json({ message: "Invalid email or password" });
//         }
//     } catch (error) {
//         console.error("Error during writer login:", error);
//         return res.status(500).json({ message: "An error occurred during login" });
//     }
// };







const loginWriter = async (req, res) => {
    const { email, password } = req.body;  
  
    try {
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const user = await knex("users")
        .select(
          "users.id",
          "users.username",
          "users.email",
          "users.password",
          "users.profile_pic",
          "roles.name as role",
          "users.balance",
          "users.created_at",
          "users.updated_at"
        )
        .join("roles", "users.role_id", "roles.id")
        .where("users.email", email)
        .first();
  
        const isValidUser = user && (await comparePassword(req.body.password, user.password))
  
      if (!isValidUser) {
        return res.status(401).json({ message: "Invalid email orrrr password" });
      }
  
      const isPasswordValid = await comparePassword(req.body.password, user.password)
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
  
      // Generate and set token
      const token = createJWT({ userId: user.id, role: user.role });
      res.cookie('jwt', token, {
        httpOnly: true,
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
        // secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
        // path: '/'
      });
      
  
      const { password: _, ...userWithoutPassword } = user;
  
      res.json({
        ...userWithoutPassword,
        message: "Successfully logged in ",
      });
  
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "An error occurred during login" });
    }
  };
  
  







module.exports = { addWriter, loginWriter };
