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
  const {
    title,
    category_id,
    tags,
    excerpt,
    number_of_words_id,
    timeframe_id,
    status,
  } = req.body;

  const user_id = req.user.userId; // Assuming user ID is set in the request

  // Validate required fields
  if (!title || !category_id || !number_of_words_id || !timeframe_id || !user_id) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  try {
    // Check if the user exists
    const user = await knex('users').where({ id: user_id }).first();
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the category is valid
    const category = await knex("blogcategories").where("id", category_id).first();
    if (!category) {
      return res.status(400).json({ error: "Invalid category ID." });
    }

    // Check if the number of words is valid
    const numberOfWords = await knex("numberofwords").where("id", number_of_words_id).first();
    if (!numberOfWords) {
      return res.status(400).json({ error: "Invalid number of words ID." });
    }

    // Check if the timeframe is valid
    const timeframe = await knex("timeframe").where("id", timeframe_id).first();
    if (!timeframe) {
      return res.status(400).json({ error: "Invalid timeframe ID." });
    }

    const now = new Date();
    const blogStatus = status || 'draft'; // Default to 'draft' if no status provided

    // Insert the new blog post into the database
    const [newBlogId] = await knex("blogs")
      .insert({
        title,
        category_id,
        tags,
        excerpt,
        number_of_words_id,
        timeframe_id,
        user_id,
        status: blogStatus,
        published_at: blogStatus === "published" ? now : null,
        created_at: now,
        updated_at: now,
      })
      .returning('id');

    // Retrieve the newly created blog post with additional details
    const newBlog = await knex("blogs")
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
        "blogcategories.name as category_name",
        "numberofwords.words as number_of_words",
        "timeframe.duration as timeframe_duration"
      )
      .leftJoin("blogcategories", "blogs.category_id", "blogcategories.id")
      .leftJoin("numberofwords", "blogs.number_of_words_id", "numberofwords.id")
      .leftJoin("timeframe", "blogs.timeframe_id", "timeframe.id")
      .where("blogs.id", newBlogId.id)
      .first();

    // Return the created blog post with detailed information
    res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      blog: {
        ...newBlog,
        category_id: undefined, // Explicitly exclude category_id
        number_of_words_id: undefined, // Explicitly exclude number_of_words_id
        timeframe_id: undefined, // Explicitly exclude timeframe_id
      },
    });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ error: "Failed to create blog." });
  }
};




// const createBlog = async (req, res) => {
//   const {
//     title,
//     category_id,
//     tags,
//     excerpt,
//     number_of_words_id,
//     timeframe_id,
//     status,
//   } = req.body;

//   const user_id = req.user.userId; // Assuming user ID is set in the request

//   // Validate required fields
//   if (!title || !category_id || !number_of_words_id || !timeframe_id || !user_id) {
//     return res.status(400).json({ error: "Required fields are missing." });
//   }

//   try {
//     // Check if the user exists
//     const user = await knex('users').where({ id: user_id }).first();
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Check if the category is valid
//     const category = await knex("blogcategories").where("id", category_id).first();
//     if (!category) {
//       return res.status(400).json({ error: "Invalid category ID." });
//     }

//     // Check if the number of words is valid
//     const numberOfWords = await knex("numberofwords").where("id", number_of_words_id).first();
//     if (!numberOfWords) {
//       return res.status(400).json({ error: "Invalid number of words ID." });
//     }

//     // Check if the timeframe is valid
//     const timeframe = await knex("timeframe").where("id", timeframe_id).first();
//     if (!timeframe) {
//       return res.status(400).json({ error: "Invalid timeframe ID." });
//     }

//     const now = new Date();
//     const blogStatus = status || 'draft'; // Default to 'draft' if no status provided

//     // Insert the new blog post into the database
//     const [newBlogId] = await knex("blogs")
//       .insert({
//         title,
//         category_id,
//         tags,
//         excerpt,
//         number_of_words_id,
//         timeframe_id,
//         user_id,
//         status: blogStatus,
//         published_at: blogStatus === "published" ? now : null,
//         created_at: now,
//         updated_at: now,
//       })
//       .returning('id');

//     // Retrieve the newly created blog post
//     const newBlog = await knex("blogs").where("id", newBlogId.id).first();

//     // Return the created blog post
//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully.",
//       blog: newBlog,
//     });
//   } catch (error) {
//     console.error("Error creating blog:", error);
//     res.status(500).json({ error: "Failed to create blog." });
//   }
// };

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
    // Check if the user exists
    const user = await knex('users').where({ id: user_id }).first();
    if (!user) {
      console.log(`User not found with ID: ${user_id}`);
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch the blog
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
        "blogcategories.name as category_name",
        "numberofwords.words as number_of_words",
        "timeframe.duration as timeframe_duration"
      )
      .leftJoin("blogcategories", "blogs.category_id", "blogcategories.id")
      .leftJoin("numberofwords", "blogs.number_of_words_id", "numberofwords.id")
      .leftJoin("timeframe", "blogs.timeframe_id", "timeframe.id")
      .where('blogs.user_id', userId)
      .andWhere('blogs.created_at', '>=', thirtyMinutesAgo)
      .orderBy('blogs.created_at', 'desc'); // Sort by creation time, most recent first

    res.status(200).json({
      success: true,
      blogs: recentBlogs.map(blog => ({
        ...blog,
        category_id: undefined, // Explicitly exclude category_id
        number_of_words_id: undefined, // Explicitly exclude number_of_words_id
        timeframe_id: undefined, // Explicitly exclude timeframe_id
      })),
    });
  } catch (error) {
    console.error('Error fetching recent blogs:', error);
    res.status(500).json({ error: 'Failed to fetch recent blogs.' });
  }
}


const editBlog = async (req, res) => {
  const { blogId } = req.params;
  const { title, category_id , tags, excerpt, number_of_words_id, timeframe_id, status } = req.body;
  const user_id = req.user.userId; // Assuming user ID is set in the request

  if (!blogId) {
    return res.status(400).json({ error: "Blog ID is required." });
  }

  try {
    // Fetch the blog post
    const blog = await knex('blogs').where({ id: blogId }).first();

    if (!blog) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    // Check if the user owns this blog post
    if (blog.user_id !== user_id) {
      return res.status(403).json({ error: "You don't have permission to edit this blog post." });
    }

    // Check if it's within 30 minutes of creation
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    if (new Date(blog.created_at) < thirtyMinutesAgo) {
      return res.status(403).json({ error: "You can only edit the blog post within 30 minutes of creation." });
    }

    // Validate required fields
    // if (!title || !number_of_words_id || !timeframe_id) {
    //   return res.status(400).json({ error: "Required fields are missing." });
    // }

    // Perform the update
    const updatedBlog = await knex('blogs')
      .where({ id: blogId })
      .update({
        title,
        category_id,
        tags,
        excerpt,
        number_of_words_id,
        timeframe_id,
        status: status || blog.status,
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

    // Check if the user owns this blog post
    if (blog.user_id !== user_id) {
      return res.status(403).json({ error: "You don't have permission to delete this blog post." });
    }

    // Check if it's within 30 minutes of creation
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    if (new Date(blog.created_at) < thirtyMinutesAgo) {
      return res.status(403).json({ error: "You can only delete the blog post within 30 minutes of creation." });
    }

    // Perform the deletion
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
  editBlog,
  deleteBlog
};
