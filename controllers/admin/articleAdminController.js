const knex = require('../../db/db');
const getArticles = async (req, res) => {
    try {
        const articles = await knex('articles').select('*');
        return res.status(200).json({ articles });
    } catch (error) {
        console.error('Error fetching articles:', error);
        return res.status(500).json({ message: 'An error occurred while fetching articles' });
    }
};


const getArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await knex('articles').where({ id }).first();

        if (article) {
            return res.status(200).json({ article });
        } else {
            return res.status(404).json({ message: 'Article not found' });
        }
    } catch (error) {
        console.error('Error fetching article:', error);
        return res.status(500).json({ message: 'An error occurred while fetching the article' });
    }
};



const deleteArticles = async (req, res) => {
    try {
        await knex('articles').del();
        return res.status(200).json({ message: 'Articles deleted successfully' });
    } catch (error) {
        console.error('Error deleting articles:', error);
        return res.status(500).json({ message: 'An error occurred while deleting the articles' });
    }
}


module.exports = { getArticles, getArticle, deleteArticles }