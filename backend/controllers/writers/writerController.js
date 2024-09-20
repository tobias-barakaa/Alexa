const knex = require('../../db/db.js');


const bcrypt = require("bcryptjs");
const { hashPassword } = require("../../utils/client/auth.utils");
const generateToken = require("../../utils/client/generateToken");

const addWriter = async (req, res) => {
    const { first_name, last_name, username, email, password, passwordConf, profile_pic } = req.body;

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
        const hashedPassword = await hashPassword(password);
        console.log("Password hashed successfully");
        
        
        const role = await knex("roles").where({ name: 'writers' }).first();
        if (!role) {
            console.log("Role 'writers' does not exist");
            return res.status(400).json({ message: "Role 'writers' does not exist" });
        }

        const [newWriter] = await knex("users")
            .insert({
                id: knex.raw("gen_random_uuid()"),
                first_name,
                last_name,
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
                .where("users.id", newWriter.id)
                .first();

            console.log("New writer created:", userWithRole);
            generateToken(res, userWithRole.id);
            return res.status(201).json({ message: "Writer account created successfully", user: userWithRole });
        } else {
            console.log("Writer account creation failed");
            return res.status(400).json({ message: "Writer account not created" });
        }
    } catch (error) {
        console.error("Error during writer account creation:", error);
        return res.status(500).json({ message: "An error occurred during writer account creation" });
    }
};


const loginWriter = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Retrieve user information including role name
        const user = await knex("users")
            .select(
                "users.id",
                "users.username",
                "users.email",
                "users.password",
                "users.profile_pic",
                "users.first_name",
                "users.last_name",
                "users.balance",
                "roles.name as role"
            )
            .join("roles", "users.role_id", "roles.id")
            .where({ email })
            .first();

        // Check if user exists and password matches
        if (user && (await bcrypt.compare(password, user.password))) {
            // Generate token and set it in response cookie
            generateToken(res, user.id);

            // Return user information with login success message
            return res.json({
                id: user.id,
                username: user.username,
                email: user.email,
                profile_pic: user.profile_pic,
                first_name: user.first_name,
                last_name: user.last_name,
                balance: user.balance,
                role: user.role,
                message: "Successfully logged in 😁",
            });
        } else {
            // Handle invalid credentials
            return res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        console.error("Error during writer login:", error);
        return res.status(500).json({ message: "An error occurred during login" });
    }
};
module.exports = { addWriter, loginWriter };
