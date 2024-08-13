const knex = require("../../db/db.js");
const {hashPassword, comparePassword} = require("../../utils/client/passwordUtiles.js");
const { createJWT } = require("../../utils/client/tokenUtils.js");


const signupUser = async (req, res) => {
  try {
    const {  username, email, password } = req.body;

    // Input validation
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await knex('users')
      .where({ username })
      .orWhere({ email })
      .first();

    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(409).json({ message: "Username already exists" });
      }
      if (existingUser.email === email) {
        return res.status(409).json({ message: "Email already exists" });
      }
    }

    const hashedPassword = await hashPassword(req.body.password)

  
    const profile_pic = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(
      username
    )}`;

    const clientRole = await knex('roles').where({ name: 'client' }).first();
    if (!clientRole) {
      return res.status(500).json({ message: "Client role not found" });
    }

    const [newUser] = await knex("users")
      .insert({
        // id: knex.raw("gen_random_uuid()"),
        username,
        email,
        password: hashedPassword,
        profile_pic: profile_pic || "https://www.gravatar.com/avatar/",
        role_id: clientRole.id,
        balance: 0.0,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      })
      .returning("*");

    if (!newUser) {
      console.log("User creation failed");
      return res.status(400).json({ message: "User not created" });
    }
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
      .where("users.id", newUser.id)
      .first();

    console.log("New user created:", userWithRole);
    return res.status(201).json({ 
      message: "User created successfully", 
      user: userWithRole 
    });

  } catch (error) {
    console.error("Error during user creation:", error);
    return res.status(500).json({ message: "An error occurred during user creation" });
  }
};






const loginUser = async (req, res) => {
  console.log(req.cookies);
  const { email, password } = req.body;
  

  try {
    // Input validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Fetch user with role information
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
      return res.status(401).json({ message: "Invalid email or password" });
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
    

    // Remove sensitive information before sending response
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



















// const loginUser = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await knex("users").where({ email }).first();

//     if (user && (await bcrypt.compare(password, user.password))) {
//       generateToken(res, user.id);
//       res.json({
//         id: user.id,
//         first_name: user.first_name,
//         last_name: user.last_name,
//         username: user.username,
//         email: user.email,
//         profile_pic: user.profile_pic,
//         role: user.role_id,
//         balance: user.balance,
//         created_at: user.created_at,
//         updated_at: user.updated_at,
//         message: "Successfully logged in 😁",
//       });
//     } else {

//       res.status(401).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ message: "An error occurred during login" });
//   }
// };














const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(200).json({ message: "User logged out successfully" });
};


















const getAllUsers = async (req, res) => {
  try {
    const users = await knex("users").select(
      "id",
      "username",
      "email",
      "profile_pic",
      "bio",
      "is_admin",
      "created_at",
      "updated_at"
    );

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching users" });
  }
};

module.exports = { signupUser, loginUser, logoutUser, getAllUsers };
