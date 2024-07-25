const knex = require("../../db/db.js");


const createBlog = async (req, res) => {
  const { title, category_id, tags, excerpt, number_of_words_id, timeframe_id, user_id, status } = req.body;

  if (!title || !category_id || !number_of_words_id || !timeframe_id || !user_id) {
    return res.status(400).json({ error: 'Required fields are missing.' });
  }

  try {
    const category = await knex('blogcategories').where('id', category_id).first();
    if (!category) {
      return res.status(400).json({ error: 'Invalid category ID.' });
    }

    const numberOfWords = await knex('numberofwords').where('id', number_of_words_id).first();
    if (!numberOfWords) {
      return res.status(400).json({ error: 'Invalid number of words ID.' });
    }

    const timeframe = await knex('timeframe').where('id', timeframe_id).first();
    if (!timeframe) {
      return res.status(400).json({ error: 'Invalid timeframe ID.' });
    }

    const user = await knex('users').where('id', user_id).first();
    if (!user) {
      return res.status(400).json({ error: 'Invalid user ID.' });
    }

    const now = new Date();
    const [newBlog] = await knex('blogs').insert({
      title,
      category_id,
      tags,
      excerpt,
      number_of_words_id,
      timeframe_id,
      user_id,
      status,
      published_at: status === 'published' ? now : null,
      created_at: now,
      updated_at: now
    }).returning('*');

    if (!status) {
      newBlog.status = 'draft';
    }
    if (newBlog.status === 'published') {
      newBlog.published_at = now;
    } else {
      newBlog.published_at = null;
    }

    await knex('blogs')
      .where('id', newBlog.id)
      .update({
        status: newBlog.status,
        published_at: newBlog.published_at
      });

    res.status(201).json({ success: true, message: 'Blog created successfully.', blog: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create blog.' });
  }
};


const updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, category_id, tags, excerpt, number_of_words_id, timeframe_id, status } = req.body;
  
    try {
      const blog = await knex('blogs').where('id', id).first();
  
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found.' });
      }
  
      const now = new Date();
      const createdAt = new Date(blog.created_at);
      const timeDifference = now - createdAt;
      const thirtyMinutesInMs = 30 * 60 * 1000;
  
      if (timeDifference > thirtyMinutesInMs) {
        return res.status(403).json({ error: 'Blog can no longer be updated. The 30-minute update window has expired.' });
      }
  
      // Perform the same validations as in createBlog
      if (category_id) {
        const category = await knex('blogcategories').where('id', category_id).first();
        if (!category) {
          return res.status(400).json({ error: 'Invalid category ID.' });
        }
      }
  
      if (number_of_words_id) {
        const numberOfWords = await knex('numberofwords').where('id', number_of_words_id).first();
        if (!numberOfWords) {
          return res.status(400).json({ error: 'Invalid number of words ID.' });
        }
      }
  
      if (timeframe_id) {
        const timeframe = await knex('timeframe').where('id', timeframe_id).first();
        if (!timeframe) {
          return res.status(400).json({ error: 'Invalid timeframe ID.' });
        }
      }
  
      const [updatedBlog] = await knex('blogs')
        .where('id', id)
        .update({
          title: title || blog.title,
          category_id: category_id || blog.category_id,
          tags: tags || blog.tags,
          excerpt: excerpt || blog.excerpt,
          number_of_words_id: number_of_words_id || blog.number_of_words_id,
          timeframe_id: timeframe_id || blog.timeframe_id,
          status: status || blog.status,
          updated_at: now
        })
        .returning('*');
  
      res.json({ success: true, message: 'Blog updated successfully.', blog: updatedBlog });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update blog.' });
    }
  };

module.exports = {
  createBlog, updateBlog
};