const knex = require("../../db/db.js");

const orderArticle = async (req, res) => {
  const user_id = req.user?.userId;

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  // Optional: Check if the user exists in the users table
  const userExists = await knex("users").where({ id: user_id }).first();
  if (!userExists) {
    return res.status(400).json({ error: "Invalid user: User not found" });
  }

  const {
    title,
    description,
    keywords,
    word_count = "300 words",
    duration = "1 day",
    complexity = "General",
    language = "American English",
    quantity = 1,
    cost = 50.0,
    status = "Pending",
    is_paid = false,
  } = req.body;
  console.log(req.body);

  try {
    await knex.transaction(async (trx) => {
      // Insert into the 'create' table (which stores articles)
      const [article] = await trx("create")
        .insert({
          title,
          description,
          keywords,
          word_count,
          duration,
          complexity,
          language,
          quantity,
          user_id,
          cost,
          status,
          is_paid,
        })
        .returning("id");
      console.log(article, "whats in the article");

      const articleId = article.id; // Ensure we extract the 'id' from the result

      res.status(201).json({
        message: "Article created successfully",
        articleId: articleId, // Returning the article ID
      });
    });
  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({
      error: "Failed to create article",
    });
  }
};

const getOrderById = async (req, res) => {
  const { id } = req.params; // Extract article ID from request parameters
  const user_id = req.user?.userId; // Ensure the user is logged in

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Fetch the article from the 'create' table where the ID matches
    const article = await knex("create").where({ id, user_id }).first(); // Get the first matching row

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    // Respond with the article details
    res.status(200).json({
      message: "Article retrieved successfully",
      article, // Return the article
    });
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({
      error: "Failed to retrieve article",
    });
  }
};

// const updateOrderToPaid = async (req, res) => {
//   const { id } = req.params; // Order ID from URL
//   console.log(id, 'whats in the id');

//   const { transactionId, payerId, status, email, amount } = req.body; // PayPal payment details
//   console.log(req.body, 'whats in the body');

//   const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer
//   console.log(user_id, 'whats in the user_id');

//   // Validate the ID and user ID
//   if (!id || isNaN(Number(id))) {
//     return res.status(400).json({ error: 'Invalid order ID' });
//   }

//   if (!user_id || isNaN(user_id)) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   // Ensure the payment status is completed
//   if (status !== 'COMPLETED') {
//     return res.status(400).json({ error: 'Payment status is not completed' });
//   }

//   try {
//     // Use a transaction to update both `create` and `order` tables atomically
//     const updatedOrder = await knex.transaction(async (trx) => {
//       // Check if the order exists in the `create` table
//       const orderInCreateTable = await trx('create')
//         .where({ id, user_id })
//         .first();
//       console.log(orderInCreateTable, 'whats in the create table order');

//       if (!orderInCreateTable) {
//         throw new Error('Order not found for this user in create table');
//       }

//       // Update the `create` table if necessary (you can customize this as needed)
//       await trx('create')
//         .where({ id, user_id })
//         .update({
//           // Any fields you want to update in the `create` table
//           is_paid: true, // Example field
//           status: 'Processing',
//           updated_at: trx.fn.now(),
//         });

//       // Update the `order` table
//       const updatedOrderInOrderTable = await trx('order')
//         .where({ id, user_id })
//         .update({
//           is_paid: true,
//           status: 'Completed',
//           paypal_transaction_id: transactionId,
//           paypal_payer_id: payerId,
//           payer_email: email,
//           paypal_amount: amount,
//           updated_at: trx.fn.now(),
//         })
//         .returning('*'); // Return the updated order

//       // Return the updated order from the `order` table
//       return updatedOrderInOrderTable[0];
//     });

//     res.status(200).json({
//       message: 'Order updated successfully',
//       order: updatedOrder,
//     });
//   } catch (error) {
//     console.error('Error updating order:', error);
//     res.status(500).json({
//       error: 'Failed to update order',
//       details: error.message, // For debugging purposes
//     });
//   }
// };

const updateOrderToPaid = async (req, res) => {
  const { id } = req.params; // Article ID from URL

  console.log(id, "whats in the id");

  const { transactionId, payerId, status, email, amount } = req.body; // PayPal payment details
  console.log(req.body, "whats in the body");

  const user_id = req.user.userId; // Access userId directly
  console.log(user_id, "whats in the user_id after accessing");

  // Validate the ID and user ID
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: "Invalid article ID" });
  }

  if (!user_id || isNaN(user_id)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  // Ensure the payment status is completed
  if (status !== "COMPLETED") {
    return res.status(400).json({ error: "Payment status is not completed" });
  }

  try {
    // Insert a new order in the order table
    const [newOrder] = await knex("order")
      .insert({
        user_id,
        paypal_transaction_id: transactionId,
        paypal_payer_id: payerId,
        payer_email: email,
        paypal_amount: amount,
        cost: amount, // Set the cost as the amount
        status: "Completed", // Set initial status
        is_paid: true, // Mark as paid
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      })
      .returning("*"); // Return the new order

    console.log(newOrder, "whats in the new order");

    // Update the `create` table
    await knex("create")
      .where({ id }) // Use the article ID
      .update({
        is_paid: true, // Mark the article as paid
        status: "Processing", // Or any other status you need
        order_id: newOrder.id, // Save the new order ID in the `create` table
        updated_at: knex.fn.now(),
      });

    res.status(200).json({
      message: "Order inserted and article updated successfully",
      order: newOrder,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    res.status(500).json({
      error: "Failed to update order",
      details: error.message, // For debugging purposes
    });
  }
};

const updatePaidOrdersToProcessing = async (req, res) => {
  try {
    // Fetch all orders that are paid but still pending
    const paidOrders = await knex("order").where({
      is_paid: true,
      status: "Pending",
    });

    // If no paid orders are found, keep them as pending
    if (paidOrders.length === 0) {
      return res
        .status(200)
        .json({ message: "No paid orders to update, status remains pending" });
    }

    // Update the status of paid orders to 'Processing'
    await knex("create").where({ is_paid: true, status: "Pending" }).update({
      status: "Processing",
      updated_at: knex.fn.now(),
    });

    res.status(200).json({ message: "Orders now in processing mode" });
  } catch (error) {
    console.error("Error updating orders:", error);
    res
      .status(500)
      .json({ error: "Failed to update orders", details: error.message });
  }
};

const getUserArticles = async (req, res) => {
  // Ensure user_id is parsed as an integer
  const user_id = parseInt(req.user?.userId, 10);
  console.log(user_id, "Logged-in user ID");

  // Validate user_id: Make sure it's an integer
  if (!user_id || isNaN(user_id)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Fetch articles created by the logged-in user
    const userArticles = await knex("create") // Assuming 'create' is the correct table name
      .where({ user_id }) // Filter by user_id only
      .select("*"); // Fetch all columns (or specify only needed ones)

    if (userArticles.length === 0) {
      return res
        .status(404)
        .json({ message: "No articles found for this user" });
    }

    res.status(200).json({
      message: "User articles retrieved successfully",
      articles: userArticles,
    });
  } catch (error) {
    console.error("Error fetching user articles:", error);
    res.status(500).json({
      error: "Failed to fetch user articles",
      details: error.message,
    });
  }
};

const getUserArticlesByCount = async (req, res) => {
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer
  console.log(user_id, "Logged-in user ID");

  // Validate the user_id
  if (!user_id || isNaN(user_id)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Fetch the count of articles created by the user
    const userArticlesCount = await knex("create")
      .where({ user_id })
      .count("id as count") // Count the number of articles for the user
      .first(); // Get the first result (as it returns an array)

    // Return the count
    res.status(200).json({
      message: "Articles count retrieved successfully",
      count: userArticlesCount.count, // Return only the count
    });
  } catch (error) {
    console.error("Error fetching article count:", error);
    res.status(500).json({
      error: "Failed to fetch article count",
      details: error.message,
    });
  }
};

// Function to count projects with status "pending"
const countPendingProjects = async (req, res) => {
  // Assuming userId is passed through req.user
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer

  // Validate the user_id
  if (!user_id || isNaN(user_id)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    const count = await knex("create")
      .where({ status: "Pending", user_id }) // Filter by status and user_id
      .count("id as count"); // Counting the number of projects

    res.status(200).json({
      message: "Pending projects count retrieved successfully",
      count: count[0].count,
    });
  } catch (error) {
    console.error("Error counting pending projects:", error);
    res.status(500).json({
      error: "Failed to count pending projects",
      details: error.message,
    });
  }
};

// Function to count projects with status "processing"
const countProcessingProjects = async (req, res) => {
  // Assuming userId is passed through req.user
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer

  // Validate the user_id
  if (!user_id || isNaN(user_id)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    const count = await knex("create")
      .where({ status: "Processing", user_id }) // Filter by status and user_id
      .count("id as count"); // Counting the number of projects

    console.log(count, "what in the count");

    res.status(200).json({
      message: "Processing projects count retrieved successfully",
      count: count[0].count,
    });
  } catch (error) {
    console.error("Error counting processing projects:", error);
    res.status(500).json({
      error: "Failed to count processing projects",
      details: error.message,
    });
  }
};

// Function to count projects with status "published"
const countPublishedProjects = async (req, res) => {
  // Assuming userId is passed through req.user
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer

  // Validate the user_id
  if (!user_id || isNaN(user_id)) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    const count = await knex("create")
      .where({ status: "Published", user_id }) // Filter by status and user_id
      .count("id as count"); // Counting the number of projects

    res.status(200).json({
      message: "Published projects count retrieved successfully",
      count: count[0].count,
    });
  } catch (error) {
    console.error("Error counting published projects:", error);
    res.status(500).json({
      error: "Failed to count published projects",
      details: error.message,
    });
  }
};

const getAllArticles = async (req, res) => {
  try {
    // Retrieve all articles from the `create` table
    const articles = await knex("create").select("*"); // You can select specific fields if needed

    // Get the count of articles
    const articleCount = articles.length;

    res.status(200).json({
      message: "Articles retrieved successfully",
      count: articleCount,
      articles,
    });
  } catch (error) {
    console.error("Error retrieving articles:", error);
    res.status(500).json({
      error: "Failed to retrieve articles",
      details: error.message, // For debugging purposes
    });
  }
};

// const fetchRecentArticles = async (req, res) => {
//   const user_id = req.user?.userId;

//   if (!user_id) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   try {
//     const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);

//     const recentArticles = await knex('create')
//       .where('created_at', '>', oneHourAgo)
//       .where('status', 'Pending')
//       .where('user_id', user_id)
//       .select('id', 'title', 'description', 'created_at');

//     res.status(200).json({
//       message: "Recent articles fetched successfully",
//       articles: recentArticles
//     });
//   } catch (error) {
//     console.error("Error fetching recent articles:", error);
//     res.status(500).json({
//       error: "Failed to fetch recent articles"
//     });
//   }
// };

const fetchRecentArticles = async (req, res) => {
  const user_id = req.user?.userId;
  console.log(user_id, "whats in the user_id");

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString(); // One hour ago

    // Fetch all articles by this user, regardless of creation time
    const allArticles = await knex("create")
      .where("user_id", user_id)
      .select(
        "id",
        "title",
        "description",
        "keywords",
        "word_count",
        "duration",
        "complexity",
        "language",
        "quantity",
        "cost",
        "status",
        "is_paid",
        "created_at"
      );

    // Separate recent and expired articles
    const recentArticles = allArticles.filter(
      (article) => new Date(article.created_at) > new Date(oneHourAgo)
    );
    const expiredArticles = allArticles.filter(
      (article) => new Date(article.created_at) <= new Date(oneHourAgo)
    );

    // If no recent or expired articles found
    if (recentArticles.length === 0 && expiredArticles.length === 0) {
      return res
        .status(404)
        .json({ message: "No articles found for this user" });
    }

    // Send response with recent articles and expired articles with the additional expired flag
    res.status(200).json({
      message: "Articles fetched successfully",
      recentArticles,
      expiredArticles: expiredArticles.map((article) => ({
        ...article,
        expired: "Expired", // Add 'expired' field to expired articles
      })),
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({
      error: "Failed to fetch articles",
    });
  }
};

const editArticle = async (req, res) => {
  const user_id = req.user?.userId;
  const { articleId } = req.params; // Assuming the article ID is passed as a URL parameter

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Fetch the article
    const article = await knex("create")
      .where({ id: articleId, user_id })
      .first();

    if (!article) {
      return res
        .status(404)
        .json({
          error: "Article not found or you do not have permission to edit it",
        });
    }

    // Check if the article was created within the last hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    if (new Date(article.created_at) < oneHourAgo) {
      return res
        .status(403)
        .json({
          error:
            "Edit time has expired. Articles can only be edited within one hour of creation",
        });
    }

    // If we've made it this far, we can proceed with the edit
    const {
      title,
      description,
      keywords,
      word_count,
      duration,
      complexity,
      language,
      quantity,
      cost,
      status,
      is_paid,
    } = req.body;

    // Update the article
    const updatedArticle = await knex("create")
      .where({ id: articleId })
      .update({
        title,
        description,
        keywords,
        word_count,
        duration,
        complexity,
        language,
        quantity,
        cost,
        status,
        is_paid,
        // Note: We're not updating user_id or created_at
      })
      .returning("*");

    res.status(200).json({
      message: "Article updated successfully",
      article: updatedArticle[0],
    });
  } catch (error) {
    console.error("Error editing article:", error);
    res.status(500).json({
      error: "Failed to edit article",
    });
  }
};

const getRecentArticleById = async (req, res) => {
  const user_id = req.user?.userId;
  const articleId = req.params.id;

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    const userExists = await knex("users").where({ id: user_id }).first();
    if (!userExists) {
      return res.status(400).json({ error: "Invalid user: User not found" });
    }

    // Fetch the article by ID
    const article = await knex("create")
      .where({
        id: articleId,
        user_id: user_id,
      })
      .first();

    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    // Check if the article is editable (within one hour of creation)
    const createdAt = new Date(article.created_at);
    const oneHourLater = new Date(createdAt.getTime() + 60 * 60 * 1000);
    const isEditable = new Date() < oneHourLater;

    // Respond with the article and whether it's editable
    res.status(200).json({
      message: "Article fetched successfully",
      article,
      isEditable,
    });
  } catch (error) {
    console.error("Error fetching article:", error);
    res.status(500).json({
      error: "Failed to fetch article",
    });
  }
};

const editArticleRequest = async (req, res) => {
  const articleId = req.params.id;
  const {
    title,
    description,
    keywords,
    word_count,
    duration,
    complexity,
    language,
    quantity,
    cost,
  } = req.body;
  console.log("Request Body:", req.body);



  try {
    // Fetch the existing article and order
    const article = await knex("create").where("id", articleId).first();
    if (!article) {
      return res.status(404).json({ error: "Article not found" });
    }

    const order = await knex("order").where("id", article.order_id).first();
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    const originalCost = article.cost;
    const newCost = cost;
    const adjustmentAmount = newCost - originalCost;

    // Only create a cost adjustment if there's a change in the cost
    if (adjustmentAmount !== 0) {
      const adjustmentType =
        adjustmentAmount < 0 ? "refund" : "additional_payment";
      const adjustedAmount = Math.abs(adjustmentAmount);

      // Use appropriate paymentStatus based on the new cost and type
      const paymentStatus =
        adjustmentType === "additional_payment" ? "Pending" : "Completed"; // Use values allowed in the table

      // Insert into cost_adjust table
      const [adjustmentId] = await knex("cost_adjust")
        .insert({
          user_id: order.user_id,
          article_id: articleId,
          order_id: order.id,
          original_cost: originalCost,
          new_cost: newCost,
          adjustment_amount: adjustedAmount,
          adjustment_type: adjustmentType,
          payment_status: paymentStatus, // Values aligned with the table
          is_processed: false,
          created_at: knex.fn.now(),
          updated_at: knex.fn.now(),
        })
        .returning("id");

      // Update the order with new cost and payment status
      await knex("order")
        .where("id", order.id)
        .update({
          cost: newCost,
          is_paid: adjustmentType === "additional_payment" ? false : true,
          updated_at: knex.fn.now(),
        });

      // Update article with new data
      await knex("create").where("id", articleId).update({
        title,
        description,
        keywords,
        word_count,
        duration,
        complexity,
        language,
        quantity,
        cost: newCost,
        is_paid: adjustmentType === "additional_payment" ? false : true,
        updated_at: knex.fn.now(),
      });

      // Send response
      return res.status(200).json({
        message: "Article updated successfully",
        adjustmentId,
      });
    } else {
      await knex("create").where("id", articleId).update({
        title,
        description,
        keywords,
        word_count,
        duration,
        complexity,
        language,
        quantity,
        cost: newCost,
        updated_at: knex.fn.now(),
      });

      return res.status(200).json({
        message: "Article updated without cost adjustment (no cost change)",
      });
    }
  } catch (error) {
    console.error("Error updating article:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  orderArticle,
  getOrderById,
  updateOrderToPaid,
  updatePaidOrdersToProcessing,
  getUserArticles,
  getUserArticlesByCount,
  countPendingProjects,
  countProcessingProjects,
  countPublishedProjects,
  getAllArticles,
  fetchRecentArticles,
  editArticle,
  getRecentArticleById,
  editArticleRequest,
};
