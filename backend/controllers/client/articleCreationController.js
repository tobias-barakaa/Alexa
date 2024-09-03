// routes/articles.js
const express = require("express");
const router = express.Router();
const knex = require("../../db/db.js");
const cron = require('node-cron');

const createArticle = async (req, res) => {
  const userId = req.user.userId;
  const {
      title,
      description,
      category = 'General',
      keywords = '',
      complexity = 'Basic',
      word_count = 300,
      duration = '1 day',
      quantity = 1,
      language = 'American English',
      cost = 0.00,
      status = 'Pending'
  } = req.body;

  try {
      const userExists = await knex('users').where({ id: userId }).first();
      if (!userExists) {
          return res.status(400).json({ error: 'User not found' });
      }

      const [id] = await knex('articlecreation').insert({
          title,
          description,
          category,
          keywords,
          complexity,
          word_count,
          duration,
          quantity,
          language,
          user_id: userId,
          cost,
          status,
      }).returning('id');

      res.status(201).json({ message: 'Article creation successful', id });
  } catch (error) {
      res.status(500).json({ error: 'Failed to create article', detail: error.message });
  }
};

const getArticlesAfter30Minutes = async (req, res) => {
  const user_id = req.user?.userId;

  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Calculate the time 30 minutes ago
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    // Query for articles created by the user after 30 minutes
    const articles = await knex("articlecreation")
      .where("user_id", user_id) // Filter by user ID
      .andWhere("created_at", ">=", thirtyMinutesAgo) // Filter by creation time
      .select("*");

    if (articles.length === 0) {
      return res
        .status(404)
        .json({ message: "No articles found created after 30 minutes." });
    }

    res.status(200).json({
      message: "Articles retrieved successfully.",
      articles: articles,
    });
  } catch (error) {
    console.error("Error retrieving articles:", error);
    res.status(500).json({ error: "Failed to retrieve articles" });
  }
};


const getArticleCountAfter30Minutes = async (req, res) => {
  const userId = req.user ? req.user.userId : null;
  if (!userId) {
    return res.status(400).json({ error: "User ID is required." });
  }

  try {
    const now = new Date();
    const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000); // 30 minutes ago

    // Fetch the count of articles created by the user within the last 30 minutes
    const recentArticlesCount = await knex("articlecreation")
      .count("id as count")
      .where("user_id", userId)
      .andWhere("created_at", ">=", thirtyMinutesAgo)
      .first();

    res.status(200).json({
      success: true,
      count: recentArticlesCount.count,
    });
  } catch (error) {
    console.error("Error fetching recent articles count:", error);
    res.status(500).json({ error: "Failed to fetch recent articles count." });
  }
};

const getEmailCopyWritingCount = async (req, res) => {
  const user_id = req.user?.userId;

  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized: User not logged in" });
  }

  try {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    const recentRequests = await knex("emailcopywriting")
      .where("user_id", user_id)
      .andWhere("created_at", ">", thirtyMinutesAgo);

    const requestCount = recentRequests.length;

    res.json({
      message: "Recent email copywriting requests retrieved successfully",
      count: requestCount,
    });
  } catch (error) {
    console.error("Error retrieving recent email copywriting requests:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the requests" });
  }
};

const updateArticleCreation = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    keywords,
    word_count,
    tone_style,
    links,
    complexity,
    cost,
    number_of_words_id,
    timeframe_id,
  } = req.body;
  const user_id = req.user?.userId;

  // Check if user is authenticated
  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized. Please log in." });
  }

  try {
    // First, check if the article exists and belongs to the user
    const article = await knex("articlecreation")
      .where({ id, user_id })
      .first();

    if (!article) {
      return res.status(404).json({
        error: "Article not found or you do not have permission to update it.",
      });
    }

    // If the article exists and belongs to the user, proceed with the update
    const [updatedArticle] = await knex("articlecreation")
      .where({ id })
      .update({
        title,
        description,
        keywords,
        word_count,
        tone_style,
        links,
        complexity,
        cost,
        number_of_words_id,
        timeframe_id,
        // You might want to update the status here if necessary
        // status: 'updated',
      })
      .returning("*");

    res.status(200).json(updatedArticle);
  } catch (error) {
    console.error("Error updating article:", error);
    res
      .status(500)
      .json({ error: "Failed to update article. Please try again." });
  }
};
// Fetch all articles created by the user
router.get("/", async (req, res) => {
  const user_id = req.user.userId;

  try {
    const articles = await knex("articles").where({ user_id });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

// Update an article
// const updateArticleCreation = async (req, res) => {
//   const { id } = req.params;
//   const {
//     title,
//     description,
//     keywords,
//     word_count,
//     tone_style = "formal",
//     links,
//     complexity,
//     cost,
//     status,
//     number_of_words_id,
//     timeframe_id,
//   } = req.body;
//   const user_id = req.user.userId;

//   try {
//     const [article] = await knex("articles")
//       .where({ id, user_id })
//       .update({
//         title,
//         description,
//         keywords,
//         word_count,
//         tone_style,
//         links,
//         complexity,
//         cost,
//         status,
//         number_of_words_id,
//         timeframe_id,
//       })
//       .returning("*");
//     if (!article) {
//       return res.status(404).json({ error: "Article not found" });
//     }
//     res.status(200).json(article);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update article" });
//   }
// }

// Delete an article
// const deleteArticleCreation = async (req, res) => {
//   const { id } = req.params;
//   const user_id = req.user.userId;

//   try {
//     const deleted = await knex("articles").where({ id, user_id }).del();
//     if (!deleted) {
//       return res.status(404).json({ error: "Article not found" });
//     }
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete article" });
//   }
// };

const deleteArticleCreation = async (req, res) => {
  const { articleId } = req.params;
  const user_id = req.user.userId;

  try {
      const article = await knex('articlecreation')
          .where({ id: articleId, user_id })
          .first();

      if (!article) {
          return res.status(404).json({ message: `Article with ID ${articleId} not found or you don't have permission to delete it.` });
      }

      // Check if the article is younger than 30 minutes
      const createdTime = new Date(article.created_at);
      const currentTime = new Date();

      const timeDifference = (currentTime - createdTime) / 1000 / 60; // Difference in minutes

      if (timeDifference < 30) {
          await knex('articlecreation').where({ id: articleId }).del();
          res.json({ message: `Article with ID ${articleId} has been deleted successfully.` });
      } else {
          res.json({ message: `Article with ID ${articleId} is older than 30 minutes and cannot be deleted.` });
      }
  } catch (error) {
      console.error(`Failed to delete article with ID ${articleId}: ${error.message}`);
      res.status(500).json({ message: `Failed to delete article with ID ${articleId}`, detail: error.message });
  }
};


const updateArticle = async (req, res) => {
  const userId = req.user.userId;
  const { articleId } = req.params;
  const {
      title,
      description,
      category = 'General',
      keywords = '',
      complexity = 'Basic',
      duration = '1 day',
      quantity = 1,
      language = 'American English',
      cost = 0.00,
      status = 'Pending'
  } = req.body;

  try {
      const article = await knex('articlecreation')
          .where({ id: articleId, user_id: userId })
          .first();

      if (!article) {
          return res.status(404).json({ error: 'Article not found or you don\'t have permission to update it' });
      }

      await knex('articlecreation')
          .where({ id: articleId })
          .update({
              title: title || article.title,
              description: description || article.description,
              category: category || article.category,
              keywords: keywords || article.keywords,
              complexity: complexity || article.complexity,
              duration: duration || article.duration,
              quantity: quantity || article.quantity,
              language: language || article.language,
              cost: cost || article.cost,
              status: status || article.status,
              // Notice word_count is not being updated here
          });

      res.status(200).json({ message: 'Article updated successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Failed to update article', detail: error.message });
  }
};



module.exports = {
  createArticle,
  getArticlesAfter30Minutes,
  getArticleCountAfter30Minutes,
  getEmailCopyWritingCount,
  updateArticle,
  updateArticleCreation,
  deleteArticleCreation,
};