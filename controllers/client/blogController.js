const knex = require("../../db/db.js");

const createBlog = async (req, res) => {
  const { title, category_id, tags, excerpt, number_of_words_id, timeframe_id, user_id, status } = req.body;

  // Basic validation
  if (!title || !category_id || !number_of_words_id || !timeframe_id || !user_id) {
    return res.status(400).json({ error: 'Required fields are missing.' });
  }

  try {
    // Check if category_id is valid
    const category = await knex('blogcategories').where('id', category_id).first();
    if (!category) {
      return res.status(400).json({ error: 'Invalid category ID.' });
    }

    // Check if number_of_words_id is valid
    const numberOfWords = await knex('numberofwords').where('id', number_of_words_id).first();
    if (!numberOfWords) {
      return res.status(400).json({ error: 'Invalid number of words ID.' });
    }

    // Check if timeframe_id is valid
    const timeframe = await knex('timeframe').where('id', timeframe_id).first();
    if (!timeframe) {
      return res.status(400).json({ error: 'Invalid timeframe ID.' });
    }

    // Check if user_id is valid
    const user = await knex('users').where('id', user_id).first();
    if (!user) {
      return res.status(400).json({ error: 'Invalid user ID.' });
    }

    // Get the current date and time
    const now = new Date();

    // Proceed with inserting the blog entry
    const [newBlog] = await knex('blogs').insert({
      title,
      category_id,
      tags,
      excerpt,
      number_of_words_id,
      timeframe_id,
      user_id,
      status,
      published_at: status === 'published' ? now : null // Set published_at if the status is 'published'
    }).returning('*'); // Retrieve the newly inserted blog entry

    res.status(201).json({ success: true, message: 'Blog created successfully.', blog: newBlog });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog.' });
  }
};

module.exports = { createBlog };
