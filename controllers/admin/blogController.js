const knex = require('../../db/db.js');

const getAllBlogs = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Fetch the user and their role from the users and roles tables
    const user = await knex('users')
      .join('roles', 'users.role_id', '=', 'roles.id')  // Assuming you have a roles table
      .select('users.*', 'roles.name as role')  // Selecting user's details and the role name
      .where('users.id', userId)
      .first();
      
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    // Fetch blogs created by the logged-in admin
    const blogs = await knex('blogs')
      .select(
        'id',
        'title',
        'category',
        'tags',
        'excerpt',
        'word_count',
        'duration',
        'language',
        'cost',
        'status',
        'created_at',
        'updated_at',
        'published_at'
      )
      .where('user_id', userId);

    res.status(200).json({ blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
};




const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Fetch the blog by ID and join with the users table to get the creator's info
    const blog = await knex('blogs')
      .join('users', 'blogs.user_id', '=', 'users.id')
      .select(
        'blogs.id',
        'blogs.title',
        'blogs.tags',
        'blogs.excerpt',
        'blogs.status',
        'blogs.category',

        'blogs.published_at',
        'blogs.created_at',
        'blogs.updated_at',
        'blogs.user_id',
    
      )
      .where('blogs.id', id)
      .first();

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found.' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch the blog.' });
  }
};



module.exports = {
  getAllBlogs,
  getBlogById,
};
