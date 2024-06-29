// adminController.js
var bcrypt = require('bcryptjs');
const knex = require("../../db/db.js");

const addAdmin = async (req, res) => {
    const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_USERNAME } = process.env;
    try {
        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
        const [newAdmin] = await knex('users')
            .insert({
                first_name: ADMIN_FIRST_NAME,
                last_name: ADMIN_LAST_NAME,
                username: ADMIN_USERNAME,
                email: ADMIN_EMAIL,
                password: hashedPassword,
                role: 'admin',
                profile_pic: `https://avatar.iran.liara.run/username?username=${ADMIN_FIRST_NAME}${ADMIN_LAST_NAME}`
            })
            .returning('*');

        res.status(201).json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the admin' });
    }
};

const initialAdminSetup = async () => {
    const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_USERNAME } = process.env;

    try {
        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

        console.log('Creating admin user with details:');
        console.log(`  Email: ${ADMIN_EMAIL}`);
        console.log(`  First Name: ${ADMIN_FIRST_NAME}`);
        console.log(`  Last Name: ${ADMIN_LAST_NAME}`);
        console.log(`  Username: ${ADMIN_USERNAME}`);
        console.log(`  Role: admin`);

        await knex('users').insert({
            first_name: ADMIN_FIRST_NAME,
            last_name: ADMIN_LAST_NAME,
            username: ADMIN_USERNAME,
            email: ADMIN_EMAIL,
            password: hashedPassword,
            role: 'admin',  // Assuming 'admin' is the valid role
            profile_pic: `https://avatar.iran.liara.run/username?username=${ADMIN_FIRST_NAME}${ADMIN_LAST_NAME}`
        });
        console.log('Initial admin user created successfully');
    } catch (error) {
        console.error('Error creating initial admin user:', error);
        if (error.code === '23514') {  
            console.error('** Constraint violation', error.constraint);
            console.error('** Check the users_role_check constraint definition.');
        } else {
            console.error('** Unexpected error:', error.message);
        }
    }
};

module.exports = { addAdmin, initialAdminSetup };
