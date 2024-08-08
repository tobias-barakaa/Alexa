// adminController.js
const knex = require("../../db/db.js");
const { hashPassword } = require('../../utils/client/auth.utils.js');
const { comparePassword } = require("../../utils/client/passwordUtiles.js");
const { createJWT } = require("../../utils/client/tokenUtils.js");

const addAdmin = async (req, res) => {
    const { username, email, password, profile_pic, role } = req.body;

    try {    

        const existUserByEmail = await knex("users").where({ email }).first();
        if (existUserByEmail) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists with this email" });
        }
        const existUserByUsername = await knex("users").where({ username }).first();
        if (existUserByUsername) {
            console.log("Username already taken:", username);
            return res.status(400).json({ message: "Username already taken" });
        }
        const userRole = await knex("roles").where({ name: role }).first();
        if (!userRole) {
            console.log("Invalid role specified");
            return res.status(400).json({ message: "Invalid role specified" });
        }
        const hashedPassword = await hashPassword(password);
        console.log("Password hashed successfully");

        const [newUser] = await knex("users")
            .insert({
                username,
                email,
                password: hashedPassword,
                profile_pic: profile_pic || "https://www.gravatar.com/avatar/",
                role_id: userRole.id,
                balance: 0.00,
                created_at: knex.fn.now(),
                updated_at: knex.fn.now(),
            })
            .returning("*");

        if (newUser) {
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
            return res.status(201).json({ message: "User created successfully", user: userWithRole });
        } else {
            console.log("User creation failed");
            return res.status(400).json({ message: "User not created" });
        }
    } catch (error) {
        console.error("Error during user creation:", error);
        return res.status(500).json({ message: "An error occurred during user creation" });
    }
};
const loginAdmin = async (req, res) => {
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

    const isValidUser = user && (await comparePassword(password, user.password));

    if (!isValidUser) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    const token = createJWT({ userId: user.id, role: user.role });
    res.cookie('jwt', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000 * 7),
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
    });

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      ...userWithoutPassword,
      message: "Successfully logged in",
    });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
}

const getUsers = async (req, res) => {
    try {
        const users = await knex("users")
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
            .join("roles", "users.role_id", "roles.id");

        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "An error occurred fetching users" });
    }
};

  
module.exports = { addAdmin, loginAdmin, getUsers };

