const generateToken = require("../../utils/client/generateToken.js");
const knex = require("../../db/db.js");
const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const signupUser = async (req, res) => {
  const { first_name, 
    last_name, 
    username,
    email,
    password,
    passwordConf }
    =
    req.body;

  try {
    console.log("Request received with body:", req.body);
    if (password !== passwordConf) {
      console.log("Passwords do not match");
      return res.status(400).json({ message: "Passwords do not match" });
    }
    const existUser = await knex("users").where({ email }).first();
    if (existUser) {
      console.log("User already exists with email:", email);
      return res.status(400).json({ message: "User already exists" });
    }
    const userRole = await knex("roles").where({name: "client"}).first();
    if (!userRole) {
      console.log("Role not found");
      return res.status(400).json({ message: "Role not found" });
    }
    const hashedPassword = await hashPassword(password);
    console.log("Password hashed successfully");
    const profile_pic = `https://avatar.iran.liara.run/username?username=${encodeURIComponent(
      first_name + last_name
    )}`;
    const [newUser] = await knex("users")
      .insert({
        id: knex.raw("gen_random_uuid()"),
        first_name,
        last_name,
        username,
        email,
        password: hashedPassword,
        profile_pic: profile_pic || "https://www.gravatar.com/avatar/",
        role: "client",
        balance: 0.0,
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      })
      .returning("*");

    if (newUser) {
      console.log("New user created:", newUser);
      generateToken(res, newUser.id);
      return res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } else {
      console.log("User creation failed");
      return res.status(400).json({ message: "User not created" });
    }
  } catch (error) {
    console.error("Error during user creation:", error);
    return res
      .status(500)
      .json({ message: "An error occurred during user creation" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
      // Fetch the user by email
      const user = await knex("users").where({ email }).first();
      
      // Check if user exists and password matches
      if (user && (await bcrypt.compare(password, user.password))) {
          // Generate and send a token
          generateToken(res, user.id);
          
          // Respond with user information
          res.json({
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              username: user.username,
              email: user.email,
              profile_pic: user.profile_pic,
              role: user.role_id, // Assuming you want to know the user's role ID
              balance: user.balance,
              created_at: user.created_at,
              updated_at: user.updated_at,
              message: "Successfully logged in 😁",
          });
      } else {
          // Invalid credentials
          res.status(401).json({ message: "Invalid email or password" });
      }
  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ message: "An error occurred during login" });
  }
};

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
