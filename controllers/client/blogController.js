const knex = require("../../db/db.js");

const getNumberOfWords = async (req, res) => {
  try {
    const numberOfWords = await knex("numberofwords").select("id", "words");
    res.json(numberOfWords);
  } catch (error) {
    console.error("Error fetching number of words options:", error);
    res.status(500).json({ error: "Failed to fetch number of words options." });
  }
};

const getTimeframe = async (req, res) => {
  try {
    const timeframes = await knex("timeframe").select("id", "duration");
    res.json(timeframes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch timeframes options." });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await knex("blogcategories").select("id", "name");
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories options." });
  }
};

const createBlog = async (req, res) => {
  try {
    const userId = req.user.userId;
    const {
      title,
      category = 'General', // Default value for category
      tags = '',
      excerpt = '',
      word_count = 300, // Default value for word_count
      duration = '1 day', // Default value for duration
      language = 'American English', // Default value for language
      cost = 0.00, // Default value for cost
      status = 'Pending' // Default value for status
    } = req.body;

    // Check if the user exists
    const user = await knex('users').where('id', userId).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Insert the new blog post into the database
    const [newBlogId] = await knex('blogs').insert({
      title,
      category,
      tags,
      excerpt,
      word_count,
      duration,
      user_id: userId,
      language,
      cost,
      status,
      created_at: new Date(),
      updated_at: new Date(),
    }).returning('id'); // Ensure the ID of the new blog is returned

    // Send response
    res.status(201).json({
      success: true,
      message: 'Blog created successfully. Please wait while we process your request.',
      blogId: newBlogId
    });
  } catch (err) {
    // Handle errors and send response
    console.error("Error creating blog:", err.message);
    res.status(400).json({ error: "Failed to create blog. " + err.message });
  }
};

const getTwoLatestPostByUser = async(req, res) => {
  try {
    const blogs = await knex('blogs')
      .orderBy('created_at', 'desc')
      .limit(2);
    res.json({ success: true, blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs." });
  }
}


const getBlogsByUser = async (req, res) => {
  const user_id = req.user.userId; // Assuming user ID is set in the request

  try {
    // Check if the user exists
    const user = await knex('users').where({ id: user_id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Retrieve all blogs by the user
    const blogs = await knex('blogs').where({ user_id });

    // Return the blogs
    res.status(200).json({
      success: true,
      blogs,
    });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    res.status(500).json({ error: "Failed to fetch blogs." });
  }
};


const getAllBlogs = async (req, res) => {
  try {
    const blogs = await knex('blogs').select('*');
    res.status(200).json({ blogs }); // Make sure this matches what you're expecting in the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
};




const getBlog = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user ? req.user.userId : null;

  if (!id || !user_id) {
    console.log('Missing blog ID or user ID');
    return res.status(400).json({ error: "Blog ID and user ID are required." });
  }

  try {
    const user = await knex('users').where({ id: user_id }).first();
    if (!user) {
      console.log(`User not found with ID: ${user_id}`);
      return res.status(404).json({ message: 'User not found' });
    }

    const blog = await knex('blogs')
      .where({ id, user_id })
      .first();

    if (!blog) {
      console.log(`Blog not found with ID: ${id} for user ID: ${user_id}`);
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: "Failed to retrieve blog." });
  }
};



const getrecentBlogs = async (req, res) => {
  const userId = req.user ? req.user.userId : null;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    const now = new Date();
    const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000); // 30 minutes ago

    // Fetch blogs created by the user within the last 30 minutes
    const recentBlogs = await knex('blogs')
      .select(
        "blogs.id",
        "blogs.title",
        "blogs.tags",
        "blogs.excerpt",
        "blogs.user_id",
        "blogs.status",
        "blogs.published_at",
        "blogs.created_at",
        "blogs.updated_at",
        "blogs.duration",
        "blogs.cost",
        "blogs.word_count",
        "blogs.category",
        "blogs.language"
      ).where('blogs.user_id', userId)
      .andWhere('blogs.created_at', '>=', thirtyMinutesAgo)
      .orderBy('blogs.created_at', 'desc'); 

    res.status(200).json({
      success: true,
      blogs: recentBlogs.map(blog => ({
        ...blog
      })),
    });
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    res.status(500).json({ error: 'Failed to fetch recent blogs.' });
  }
}











const getRecentBlogsCount = async (req, res) => {
  const userId = req.user ? req.user.userId : null;
  if (!userId) {
    return res.status(400).json({ error: 'User ID is required.' });
  }

  try {
    const now = new Date();
    const thirtyMinutesAgo = new Date(now - 30 * 60 * 1000);

    // Fetch the count of blogs created by the user within the last 30 minutes
    const recentBlogsCount = await knex('blogs')
      .count('id as count')
      .where('user_id', userId)
      .andWhere('created_at', '>=', thirtyMinutesAgo)
      .first();

    res.status(200).json({
      success: true,
      count: recentBlogsCount.count
    });
  } catch (error) {
    console.error('Error fetching recent blogs count:', error);
    res.status(500).json({ error: 'Failed to fetch recent blogs count.' });
  }
};


const editBlog = async (req, res) => {
  const { blogId } = req.params;
  const { title, category , tags, excerpt, word_count, duration } = req.body;
  const user_id = req.user.userId; 

  if (!blogId) {
    return res.status(400).json({ error: "Blog ID is required." });
  }

  try {
    const blog = await knex('blogs').where({ id: blogId }).first();

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    if (blog.user_id !== user_id) {
      return res.status(403).json({ error: "You don't have permission to edit this blog post." });
    }

    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    if (new Date(blog.created_at) < thirtyMinutesAgo) {
      return res.status(403).json({ error: "You can only edit the blog post within 30 minutes of creation." });
    }
    const updatedBlog = await knex('blogs')
      .where({ id: blogId })
      .update({
        title,
        category,
        tags,
        excerpt,
        duration,
        word_count,
        updated_at: new Date()
      })
      .returning('*');

    res.json({
      success: true,
      message: "Blog post updated successfully.",
      blog: updatedBlog[0]
    });

  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: "Failed to update blog post." });
  }
};



const deleteBlog = async (req, res) => {
  const { blogId } = req.params;
  const user_id = req.user.userId; // Assuming user ID is set in the request

  try {
    // Fetch the blog post
    const blog = await knex('blogs').where({ id: blogId }).first();

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    if (blog.user_id !== user_id) {
      return res.status(403).json({ error: "You don't have permission to delete this blog post." });
    }

    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    if (new Date(blog.created_at) < thirtyMinutesAgo) {
      return res.status(403).json({ error: "You can only delete the blog post within 30 minutes of creation." });
    }

    await knex('blogs').where({ id: blogId }).del();

    res.json({
      success: true,
      message: "Blog post deleted successfully."
    });

  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: "Failed to delete blog post." });
  }
};

module.exports = {
  getNumberOfWords,
  getTimeframe,
  getCategories,
  createBlog,
  getAllBlogs,
  getBlog,
  getBlogsByUser,
  getTwoLatestPostByUser,
  getrecentBlogs,
  getRecentBlogsCount,
  editBlog,
  deleteBlog
};
