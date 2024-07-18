const knex = require("../../db/db.js");
const validateArticleInput = require("../../dataValidation/createArticle.js");


const createArticle = async (req, res) => {
    const {
        description,
        category,
        number_of_words,
        quantity,
        keywords,
        author_tone,
        language,
        duration,
        cost
    } = req.body;

    const user_id = req.user.userId; 

    console.log(
        user_id,
        description,
        category,
        number_of_words,
        quantity,
        keywords,
        author_tone,
        language,
        duration,
        cost
    );

    const validationErrors = validateArticleInput({
        category,
        number_of_words,
        quantity,
        author_tone,
        language,
        duration
    });

    if (validationErrors.length > 0) {
        return res.status(400).json({ message: 'Validation failed', errors: validationErrors });
    }

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
};


const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await knex('articles').where({ id }).first();

        if (article) {
            await knex('articles').where({ id }).del();
            return res.status(200).json({ message: 'Article deleted successfully' });
        } else {
            return res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        console.error('Error deleting article:', error);
        return res.status(500).json({ message: 'An error occurred while deleting the article' });
    }
};


const updateArticle = async (req, res) => {
    const articleId = req.params.id;
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
        duration,
        cost
    } = req.body;

    try {
        const [updatedArticle] = await knex('articles')
            .where({ id: articleId })
            .update({
                user_id,
                description,
                category,
                number_of_words,
                quantity,
                keywords,
                author_tone,
                language,
                type,
                duration,
                cost,
                updated_at: knex.fn.now()
            })
            .returning('*');

        if (updatedArticle) {
            return res.status(200).json({ message: 'Article updated successfully', article: updatedArticle });
        } else {
            return res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        console.error('Error updating article:', error);
        return res.status(500).json({ message: 'An error occurred while updating the article' });
    }
};


module.exports = {
    createArticle,
    deleteArticle,
    updateArticle,

};
