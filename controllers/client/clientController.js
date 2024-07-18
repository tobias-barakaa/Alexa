const generateToken = require("../../utils/client/generateToken.js");
const knex = require("../../db/db.js");
const bcrypt = require("bcryptjs");
const hashPassword = require("../../utils/client/passwordUtiles.js");
// const { hashPassword } = require("../../utils/client/auth.utils.js");

// const signupUsers = async (req, res) => {
//   const { first_name, last_name, username, email, password, passwordConf } =
//     req.body;

//   try {
//     console.log("Request received with body:", req.body);
//     if (password !== passwordConf) {
//       console.log("Passwords do not match");
//       return res.status(400).json({ message: "Passwords do not match" });
//     }
//     const existUser = await knex("users").where({ email }).first();
//     if (existUser) {
//       console.log("User already exists with email:", email);
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const existUserByUsername = await knex("users").where({ username }).first();
//     if (existUserByUsername) {
//       console.log("Username already taken:", username);
//       return res.status(400).json({ message: "Username already taken" });
//     }
//     const userRole = await knex("roles").where({ name: "client" }).first();
//     if (!userRole) {
//       console.log("Role not found");
//       return res.status(400).json({ message: "Role not found" });
//     }
//     const hashedPassword = await hashPassword(password);
//     console.log("Password hashed successfully");
//     const profile_pic = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(
//       first_name + last_name
//     )}`;

//     const [newUser] = await knex("users")
//       .insert({
//         id: knex.raw("gen_random_uuid()"),
//         first_name,
//         last_name,
//         username,
//         email,
//         password: hashedPassword,
//         profile_pic: profile_pic || "https://www.gravatar.com/avatar/",
//         role_id: userRole.id,
//         balance: 0.0,
//         created_at: knex.fn.now(),
//         updated_at: knex.fn.now(),
//       })
//       .returning("*");

//     if (newUser) {
//       const userWithRole = await knex("users")
//         .select(
//           "users.id",
//           "users.first_name",
//           "users.last_name",
//           "users.username",
//           "users.email",
//           "users.profile_pic",
//           "roles.name as role",
//           "users.balance",
//           "users.created_at",
//           "users.updated_at"
//         )
//         .join("roles", "users.role_id", "roles.id")
//         .where("users.id", newUser.id)
//         .first();

//       console.log("New user created:", userWithRole);
//       generateToken(res, userWithRole.id);
//       return res
//         .status(201)
//         .json({ message: "User created successfully", user: userWithRole });
//     } else {
//       console.log("User creation failed");
//       return res.status(400).json({ message: "User not created" });
//     }
//   } catch (error) {
//     console.error("Error during user creation:", error);
//     return res
//       .status(500)
//       .json({ message: "An error occurred during user creation" });
//   }
// };

const signupUser = async (req, res) => {
  try {
    const { first_name, last_name, username, email, password, passwordConf } = req.body;

    // Input validation
    if (!first_name || !last_name || !username || !email || !password || !passwordConf) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== passwordConf) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if username or email already exists
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

    // Password hashing
    const hashedPassword = await hashPassword(req.body.password)

    // Generate profile picture URL
    const profile_pic = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(
      first_name + last_name
    )}`;

    // Fetch the 'client' role ID
    const clientRole = await knex('roles').where({ name: 'client' }).first();
    if (!clientRole) {
      return res.status(500).json({ message: "Client role not found" });
    }

    // Insert new user
    const [newUser] = await knex("users")
      .insert({
        id: knex.raw("gen_random_uuid()"),
        first_name,
        last_name,
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

    // Fetch user with role information
    const userWithRole = await knex("users")
      .select(
        "users.id",
        "users.first_name",
        "users.last_name",
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
    
    // Generate and set token
    generateToken(res, userWithRole.id);

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
        "users.first_name",
        "users.last_name",
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

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate and set token
    generateToken(res, user.id);

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
