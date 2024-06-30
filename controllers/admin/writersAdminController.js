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
            .where('roles.name', 'writers');

        res.status(200).json({ writers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching writers' });
    }
};


const assignArticle = async (req, res) => {
    const { article_id, writer_id } = req.body;

    try {
        const article = await knex('articles').where({ id: article_id }).first();

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        const updatedArticle = await knex('articles')
            .where({ id: article_id })
            .update({
                writer_id,
                status: 'in_progress',
                updated_at: knex.fn.now(),
            })
            .returning('*');

        return res.status(200).json({ message: 'Article assigned successfully', article: updatedArticle[0] });
    } catch (error) {
        console.error('Error during article assignment:', error);
        return res.status(500).json({ message: 'An error occurred during article assignment' });
    }
};


module.exports = {getWriters, assignArticle};
