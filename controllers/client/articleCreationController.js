// routes/articles.js
const express = require("express");
const router = express.Router();
const knex = require("../../db/db.js");

// Create a new article
const createArticle = async (req, res) => {
  const {
    title,
    description,
    keywords,
    word_count,
    tone_style = "Formal",
    links,
    complexity,
    cost,
    // number_of_words_id,
    timeframe_id,
  } = req.body;
  console.log({
    title,
    description,
    keywords,
    word_count,
    tone_style,
    links,
    complexity,
    cost,
    timeframe_id,
  });

  const user_id = req.user?.userId;
  console.log(user_id);

  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const [article] = await knex("articlecreation")
      .insert({
        user_id,
        title,
        description,
        keywords,
        word_count,
        tone_style,
        links,
        complexity,
        cost,
        status: "pending",
        timeframe_id,
      })
      .returning("*");
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: "Failed to create article" });
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
      .where('user_id', user_id) // Filter by user ID
      .andWhere('created_at', '>=', thirtyMinutesAgo) // Filter by creation time
      .select('*');

    if (articles.length === 0) {
      return res.status(404).json({ message: "No articles found created after 30 minutes." });
    }

    res.status(200).json({
      message: "Articles retrieved successfully.",
      articles: articles,
    });
  } catch (error) {
    console.error('Error retrieving articles:', error);
    res.status(500).json({ error: "Failed to retrieve articles" });
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
      return res
        .status(404)
        .json({
          error:
            "Article not found or you do not have permission to update it.",
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
const deleteArticleCreation = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.userId;

  try {
    const deleted = await knex("articles").where({ id, user_id }).del();
    if (!deleted) {
      return res.status(404).json({ error: "Article not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete article" });
  }
};

module.exports = { createArticle,getArticlesAfter30Minutes, updateArticleCreation, deleteArticleCreation };
