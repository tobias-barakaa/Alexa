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

    // Extract the ID value from the object
    const blogId = newBlogId.id;

    // Retrieve the newly created blog post
    const newBlog = await knex("blogs").where("id", blogId).first();

    // Return the created blog post
    res.status(201).json({
      success: true,
      message: "Blog created successfully.",
      blog: newBlog,
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

//   const user_id = req.user.userId;

//   if (!title || !category_id || !number_of_words_id || !timeframe_id || !user_id) {
//     return res.status(400).json({ error: "Required fields are missing." });
//   }

//   try {
//     // Check if the user exists
//     const user = await knex('users').where({ id: user_id }).first();
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const category = await knex("blogcategories").where("id", category_id).first();
//     if (!category) {
//       return res.status(400).json({ error: "Invalid category ID." });
//     }

//     const numberOfWords = await knex("numberofwords").where("id", number_of_words_id).first();
//     if (!numberOfWords) {
//       return res.status(400).json({ error: "Invalid number of words ID." });
//     }

//     const timeframe = await knex("timeframe").where("id", timeframe_id).first();
//     if (!timeframe) {
//       return res.status(400).json({ error: "Invalid timeframe ID." });
//     }

//     const now = new Date();
//     const blogStatus = status || 'draft';
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

//     const newBlog = await knex("blogs").where("id", newBlogId.id).first();

//     res.status(201).json({
//       success: true,
//       message: "Blog created successfully.",
//       blog: newBlog,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to create blog." });
//   }
// };

// In your API routes
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await knex('blogs').select('*');
    res.status(200).json({ blogs }); // Make sure this matches what you're expecting in the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs.' });
  }
};





// const getBlog = async (req, res) => {
//   const { id } = req.params;
//   const user_id = req.user.userId;

//   try {
//     const blog = await knex("blogs")
//       .select(
//         "blogs.*",
//         "blogcategories.name as category_name",
//         "numberofwords.words as word_count",
//         "timeframe.name as timeframe_name",
//         "users.username as author_name"
//       )
//       .leftJoin("blogcategories", "blogs.category_id", "blogcategories.id")
//       .leftJoin("numberofwords", "blogs.number_of_words_id", "numberofwords.id")
//       .leftJoin("timeframe", "blogs.timeframe_id", "timeframe.id")
//       .leftJoin("users", "blogs.user_id", "users.id")
//       .where("blogs.id", id)
//       .first();

//     if (!blog) {
//       return res.status(404).json({ error: "Blog not found." });
//     }

//     // Check if the user is authorized to view this blog
//     // This assumes that users can only view their own blogs
//     // Modify this check according to your authorization rules
//     if (blog.user_id !== user_id) {
//       return res.status(403).json({ error: "You are not authorized to view this blog." });
//     }

//     // Format the response
//     const formattedBlog = {
//       id: blog.id,
//       title: blog.title,
//       excerpt: blog.excerpt,
//       tags: blog.tags,
//       content: blog.content,
//       category: {
//         id: blog.category_id,
//         name: blog.category_name
//       },
//       wordCount: {
//         id: blog.number_of_words_id,
//         count: blog.word_count
//       },
//       timeframe: {
//         id: blog.timeframe_id,
//         name: blog.timeframe_name
//       },
//       author: {
//         id: blog.user_id,
//         username: blog.author_name
//       },
//       status: blog.status,
//       publishedAt: blog.published_at,
//       createdAt: blog.created_at,
//       updatedAt: blog.updated_at
//     };

//     res.json({
//       success: true,
//       blog: formattedBlog
//     });

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to retrieve blog." });
//   }
// };

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



const updateBlog = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    category_id,
    tags,
    excerpt,
    number_of_words_id,
    timeframe_id,
    status,
  } = req.body;

  try {
    const blog = await knex("blogs").where("id", id).first();

    if (!blog) {
      return res.status(404).json({ error: "Blog not found." });
    }

    const now = new Date();
    const createdAt = new Date(blog.created_at);
    const timeDifference = now - createdAt;
    const thirtyMinutesInMs = 30 * 60 * 1000;

    if (timeDifference > thirtyMinutesInMs) {
      return res
        .status(403)
        .json({
          error:
            "Blog can no longer be updated. The 30-minute update window has expired.",
        });
    }

    // Perform the same validations as in createBlog
    if (category_id) {
      const category = await knex("blogcategories")
        .where("id", category_id)
        .first();
      if (!category) {
        return res.status(400).json({ error: "Invalid category ID." });
      }
    }

    if (number_of_words_id) {
      const numberOfWords = await knex("numberofwords")
        .where("id", number_of_words_id)
        .first();
      if (!numberOfWords) {
        return res.status(400).json({ error: "Invalid number of words ID." });
      }
    }

    if (timeframe_id) {
      const timeframe = await knex("timeframe")
        .where("id", timeframe_id)
        .first();
      if (!timeframe) {
        return res.status(400).json({ error: "Invalid timeframe ID." });
      }
    }

    const [updatedBlog] = await knex("blogs")
      .where("id", id)
      .update({
        title: title || blog.title,
        category_id: category_id || blog.category_id,
        tags: tags || blog.tags,
        excerpt: excerpt || blog.excerpt,
        number_of_words_id: number_of_words_id || blog.number_of_words_id,
        timeframe_id: timeframe_id || blog.timeframe_id,
        status: status || blog.status,
        updated_at: now,
      })
      .returning("*");

    res.json({
      success: true,
      message: "Blog updated successfully.",
      blog: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update blog." });
  }
};

module.exports = {
  getNumberOfWords,
  getTimeframe,
  getCategories,
  createBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
};
