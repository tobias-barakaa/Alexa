// adminController.js
var bcrypt = require('bcryptjs');
const knex = require("../../db/db.js");
const { hashPassword } = require('../../utils/client/auth.utils.js');
const generateToken = require('../../utils/client/generateToken.js');

const addAdmin = async (req, res) => {
    const { first_name, last_name, username, email, password, passwordConf, profile_pic, role } = req.body;

    try {
        console.log("Request received with body:", req.body);

        if (password !== passwordConf) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

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
                id: knex.raw("gen_random_uuid()"),
                first_name,
                last_name,
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
            // Fetch the user with the role name
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
            generateToken(res, userWithRole.id);
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

module.exports = { addAdmin };




// const addAdmin = async (req, res) => {
//     const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_USERNAME } = process.env;
//     try {
//         const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
//         const [newAdmin] = await knex('users')
//             .insert({
//                 first_name: ADMIN_FIRST_NAME,
//                 last_name: ADMIN_LAST_NAME,
//                 username: ADMIN_USERNAME,
//                 email: ADMIN_EMAIL,
//                 password: hashedPassword,
//                 role: 'admin',
//                 profile_pic: `https://avatar.iran.liara.run/username?username=${ADMIN_FIRST_NAME}${ADMIN_LAST_NAME}`
//             })
//             .returning('*');

//         res.status(201).json(newAdmin);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'An error occurred while adding the admin' });
//     }
// };

// const initialAdminSetup = async () => {
//     const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_USERNAME } = process.env;

//     try {
//         const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

//         console.log('Creating admin user with details:');
//         console.log(`  Email: ${ADMIN_EMAIL}`);
//         console.log(`  First Name: ${ADMIN_FIRST_NAME}`);
//         console.log(`  Last Name: ${ADMIN_LAST_NAME}`);
//         console.log(`  Username: ${ADMIN_USERNAME}`);
//         console.log(`  Role: admin`);

//         await knex('users').insert({
//             first_name: ADMIN_FIRST_NAME,
//             last_name: ADMIN_LAST_NAME,
//             username: ADMIN_USERNAME,
//             email: ADMIN_EMAIL,
//             password: hashedPassword,
//             role: 'admin',
//             profile_pic: `https://avatar.iran.liara.run/username?username=${ADMIN_FIRST_NAME}${ADMIN_LAST_NAME}`
//         });
//         console.log('Initial admin user created successfully');
//     } catch (error) {
//         console.error('Error creating initial admin user:', error);
//         if (error.code === '23514') {
//             console.error('** Constraint violation', error.constraint);
//             console.error('** Check the users_role_check constraint definition.');
//         } else {
//             console.error('** Unexpected error:', error.message);
//         }
//     }
// };


