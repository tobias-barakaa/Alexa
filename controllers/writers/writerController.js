const bcrypt = require("bcryptjs");
const { hashPassword } = require("../../utils/client/auth.utils");
const generateToken = require("../../utils/client/generateToken");

const addWriter = async (req, res) => {
    const { first_name, last_name, username, email, password, passwordConf, profile_pic } = req.body;

    try {
        console.log("Request received with body:", req.body);

        // Check if passwords match
        if (password !== passwordConf) {
            console.log("Passwords do not match");
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if user already exists
        const existUser = await knex("users").where({ email }).first();
        if (existUser) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);
        console.log("Password hashed successfully");

        // Insert the new user into the database as a writer
        const [newWriter] = await knex("users")
            .insert({
                id: knex.raw("gen_random_uuid()"),
                first_name,
                last_name,
                username,
                email,
                password: hashedPassword,
                profile_pic: profile_pic || "https://www.gravatar.com/avatar/",
                role: 'writer', // Assuming 'writer' is a predefined role in your database
                balance: 0.00, // Default balance
                created_at: knex.fn.now(),
                updated_at: knex.fn.now(),
            })
            .returning("*");

        if (newWriter) {
            console.log("New writer created:", newWriter);
            // Assuming generateToken function generates a token and sends it in the response
            generateToken(res, newWriter.id);
            return res.status(201).json({ message: "Writer account created successfully", user: newWriter });
        } else {
            console.log("Writer account creation failed");
            return res.status(400).json({ message: "Writer account not created" });
        }
    } catch (error) {
        console.error("Error during writer account creation:", error);
        return res.status(500).json({ message: "An error occurred during writer account creation" });
    }
};

module.exports = { addWriter };