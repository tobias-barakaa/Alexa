const knex = require('../../db/db.js');

const getAllArticles = async (req, res) => {
    try {
      // Check if the user is authenticated
      const user_id = req.user?.userId;
      const userRole = req.user?.role;
  
      // Check if the user is an admin
      if (!user_id || userRole !== 'admin') {
        return res.status(403).json({
          status: 403,
          error: 'Forbidden',
          message: 'You do not have permission to access this resource.',
          type: 'Client Error'
        });
      }
  
      // Fetch all articles
      const articles = await knex('articlecreation').select('*');
  
      if (articles.length === 0) {
        return res.status(404).json({
          status: 404,
          error: 'Not Found',
          message: 'No articles found.',
          type: 'Client Error'
        });
      }
  
      res.status(200).json({
        status: 200,
        message: 'Articles fetched successfully.',
        data: articles
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
  
      res.status(500).json({
        status: 500,
        error: 'Internal Server Error',
        message: 'An unexpected error occurred while fetching the articles. Please try again later.',
        type: 'Server Error'
      });
    }
  };
  
  module.exports = { getAllArticles };
  