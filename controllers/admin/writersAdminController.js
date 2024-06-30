const knex = require('../../db/db.js');

const getWriters = async (req, res) => {
    try {
        const writers = await knex('users')
            .select(
                'users.id',
                'users.first_name',
                'users.last_name',
                'users.username',
                'users.email',
                'users.profile_pic',
                'roles.name as role',
                'users.balance',
                'users.created_at',
                'users.updated_at'
            )
            .join('roles', 'users.role_id', 'roles.id')
            .where('roles.name', 'writer');

        res.status(200).json({ writers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching writers' });
    }
};

module.exports = {getWriters};
