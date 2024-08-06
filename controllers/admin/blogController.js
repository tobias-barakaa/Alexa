const knex = require('../../db/db.js');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await knex('blogs')
      .join('users', 'blogs.user_id', '=', 'users.id')
      .select(
        'blogs.id',
        'blogs.title',
        'blogs.tags',
        'blogs.excerpt',
        'blogs.status',
        'blogs.published_at',
        'blogs.created_at',
        'blogs.updated_at',
        
      );

    res.status(200).json({ blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
};

module.exports = {
  getAllBlogs
};
