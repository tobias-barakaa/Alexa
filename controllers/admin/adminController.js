const bcrypt = require(bcryptjs);

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
                profile_pic_url: `https://avatar.iran.liara.run/username?username=${first_name}${last_name}`
            })
            .returning('*');

        res.status(201).json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the admin' });
    }
};

if (require.main === module) {
    addAdmin();
}

module.exports = addAdmin;