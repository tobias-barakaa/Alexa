const knex = require("../../db/db.js");


async function createArticle(req, res) {
    const {
        user_id,
        description,
        category,
        number_of_words,
        quantity,
        keywords,
        author_tone,
        language,
        type,
        content,
        duration,
        cost
    } = req.body;

    try {
        const [newArticle] = await knex('articles')
            .insert({
                id: knex.raw('gen_random_uuid()'),
                user_id,
                description,
                category,
                number_of_words,
                quantity,
                keywords,
                author_tone,
                status: 'pending', 
                language,
                type,
                content,
                client_id: req.user.id,
                duration,
                cost,
                created_at: knex.fn.now(),
                updated_at: knex.fn.now()
            })
            .returning('*');

        if (newArticle) {
            return res.status(201).json({ message: 'Article created successfully', article: newArticle });
        } else {
            return res.status(400).json({ message: 'Failed to create article' });
        }
    } catch (error) {
        console.error('Error creating article:', error);
        return res.status(500).json({ message: 'An error occurred while creating the article' });
    }
}

module.exports = {
    createArticle,
};
