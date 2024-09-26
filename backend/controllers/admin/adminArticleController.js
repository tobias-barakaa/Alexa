const knex = require('../../db/db');
const getArticles = async (req, res) => {
    const user_id = req.user?.userId; 
    console.log(user_id, 'user id and its here') 
  
    if (!user_id) {
      return res.status(401).json({ message: 'Unauthorized: User must be logged in' });
    }
  
    try {
      const user = await knex('users')
        .join('roles', 'users.role_id', 'roles.id')
        .where('users.id', user_id)
        .select('roles.name as role')
        .first();
  
      if (!user || user.role !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: You do not have access to this resource' });
      }
  
      // If user is admin, fetch all articles
      const articles = await knex('create').select('*');
  
      return res.status(200).json({ articles });
    } catch (error) {
      console.error('Error fetching articles:', error);
      return res.status(500).json({ message: 'An error occurred while fetching articles' });
    }
  };
  

  const getArticle = async (req, res) => {
    const { id } = req.params;
    const user_id = req.user?.userId; 


    try {
        // Fetch the user's role from the database
        const user = await knex('users')
            .join('roles', 'users.role_id', 'roles.id')
            .where('users.id', user_id)
            .select('roles.name as role')
            .first();

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user has the appropriate role (e.g., 'admin')
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied: Insufficient permissions' });
        }

        // Fetch the article if the user is authorized
        const article = await knex('create').where({ id }).first();

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


const searchArticles = async (req, res) => {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }
  
    try {
      const articles = await knex('articles')
        .whereRaw('description ~* ? OR content ~* ?', [query, query]);
  
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while searching for articles' });
    }
  };

module.exports = { getArticles, getArticle, deleteArticles, searchArticles }