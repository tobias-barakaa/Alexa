const addAdmin = async (req, res) => {
    const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_FIRST_NAME, ADMIN_LAST_NAME, ADMIN_USERNAME } = process.env;


    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [newAdmin] = await knex('users')
            .insert({
                first_name,
                last_name,
                username,
                email,
                password: hashedPassword,
                role: 'admin', // Setting role to admin
                profile_pic_url: `https://avatar.iran.liara.run/username?username=${first_name}${last_name}`
            })
            .returning('*');

        res.status(201).json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the admin' });
    }
};