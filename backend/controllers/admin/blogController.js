const knex = require('../../db/db.js');

const getAllBlogs = async (req, res) => {
  try {
    const userId = req.user.userId;
    console.log(userId, 'User ID in getAllBlogs');

    const user = await knex('users')
      .join('roles', 'users.role_id', '=', 'roles.id')
      .select('users.*', 'roles.name as role')
      .where('users.id', userId)
      .first();
      
    console.log(user, 'User details in getAllBlogs');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    // Remove user filter for testing
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
      );

    console.log(blogs, 'Blogs fetched in getAllBlogs');

    res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error in getAllBlogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
};


// const getAllBlogs = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     console.log(userId, 'User ID in getAllBlogs');

//     const user = await knex('users')
//       .join('roles', 'users.role_id', '=', 'roles.id')  
//       .select('users.*', 'roles.name as role')  
//       .where('users.id', userId)
//       .first();
      
//     console.log(user, 'User details in getAllBlogs');

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (user.role !== 'admin') {
//       return res.status(403).json({ error: 'Access denied. Admins only.' });
//     }

//     const blogs = await knex('blogs')
//       .select(
//         'id',
//         'title',
//         'category',
//         'tags',
//         'excerpt',
//         'word_count',
//         'duration',
//         'language',
//         'cost',
//         'status',
//         'created_at',
//         'updated_at',
//         'published_at'
//       )
//       .where('user_id', userId);

//     console.log(blogs, 'Blogs fetched in getAllBlogs');

//     res.status(200).json({ blogs });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch blogs.' });
//   }
// };


// const getAllBlogs = async (req, res) => {
//   try {
//     const userId = req.user.userId;
//     console.log(userId, 'this is get all blogs')

    
//     const user = await knex('users')
//       .join('roles', 'users.role_id', '=', 'roles.id')  
//       .select('users.*', 'roles.name as role')  
//       .where('users.id', userId)
//       .first();
      
//     console.log(user, 'say what');

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     if (user.role !== 'admin') {
//       return res.status(403).json({ error: 'Access denied. Admins only.' });
//     }

//     const blogs = await knex('blogs')
//       .select(
//         'id',
//         'title',
//         'category',
//         'tags',
//         'excerpt',
//         'word_count',
//         'duration',
//         'language',
//         'cost',
//         'status',
//         'created_at',
//         'updated_at',
//         'published_at'
//       )
//       .where('user_id', userId);

//     res.status(200).json({ blogs });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch blogs.' });
//   }
// };


const deleteAllBlogs = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Fetch the user and their role from the users and roles tables
    const user = await knex('users')
      .join('roles', 'users.role_id', '=', 'roles.id')
      .select('users.*', 'roles.name as role')
      .where('users.id', userId)
      .first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    // Start a transaction to ensure all deletions succeed or fail together
    await knex.transaction(async (trx) => {
      // Delete related uploads first
      await trx('uploads')
        .whereIn('blog_id', function() {
          this.select('id')
            .from('blogs')
            .where('user_id', userId);
        })
        .del();

      // Delete all blogs created by the logged-in admin
      await trx('blogs')
        .where('user_id', userId)
        .del();
    });

    res.status(200).json({ message: 'All blogs and related uploads deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete blogs and related uploads.' });
  }
};





// const getBlogById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Fetch the blog by ID and join with the users table to get the creator's info
//     const blog = await knex('blogs')
//       .join('users', 'blogs.user_id', '=', 'users.id')
//       .select(
//         'blogs.id',
//         'blogs.title',
//         'blogs.tags',
//         'blogs.excerpt',
//         'blogs.status',
//         'blogs.category',

//         'blogs.published_at',
//         'blogs.created_at',
//         'blogs.updated_at',
//         'blogs.user_id',
    
//       )
//       .where('blogs.id', id)
//       .first();

//     if (!blog) {
//       return res.status(404).json({ error: 'Blog not found.' });
//     }

//     res.status(200).json({ blog });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch the blog.' });
//   }
// };

const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.user.userId;

    // Fetch the user and their role
    const user = await knex('users')
      .join('roles', 'users.role_id', '=', 'roles.id')
      .select('users.*', 'roles.name as role')
      .where('users.id', userId)
      .first();

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied. Admins only.' });
    }

    // Fetch the blog by ID and include the user_id
    const blog = await knex('blogs')
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
        'published_at',
        'user_id'  // Include user_id in the response
      )
      .where('id', blogId)
      .first();

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blog.' });
  }
};




module.exports = {
  getAllBlogs,
  getBlogById,
  deleteAllBlogs
};
