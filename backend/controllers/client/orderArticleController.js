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




const getAllArticles = async (req, res) => {
  const user_id = req.user?.userId; // Get the user ID from the request

  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Query the 'create' table for articles created by the user
    const articles = await knex("create").where({ user_id });

    // Return 200 with an empty array if no articles are found
    if (articles.length === 0) {
      return res.status(200).json({
        message: "No articles found for this user.",
        articles: [],
      });
    }

    // Return the articles found
    res.status(200).json({
      message: "Articles retrieved successfully",
      articles,
    });
  } catch (error) {
    console.error("Error retrieving articles:", error);
    res.status(500).json({ error: "Failed to retrieve articles" });
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

// const getAllArticles = async (req, res) => {
//   try {
//     // Retrieve all articles from the `create` table
//     const articles = await knex("create").select("*"); // You can select specific fields if needed

//     // Get the count of articles
//     const articleCount = articles.length;

//     res.status(200).json({
//       message: "Articles retrieved successfully",
//       count: articleCount,
//       articles,
//     });
//   } catch (error) {
//     console.error("Error retrieving articles:", error);
//     res.status(500).json({
//       error: "Failed to retrieve articles",
//       details: error.message, // For debugging purposes
//     });
//   }
// };

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
  const user_id = req.user?.userId;
  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized: User must be logged in" });
  }
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

    const originalCost = article.cost;
    const newCost = cost;
    const adjustmentAmount = newCost - originalCost;
    // const checkIfisPaid = article.is_paid;
    // if(checkIfisPaid === true && adjustmentAmount < 0) {
    //   return res.status(400).json({ error: "Cannot reduce cost for a paid article" });

    // }

    // Only create a cost adjustment if there's a change in the cost
    if (adjustmentAmount !== 0) {
      const adjustmentType =
        adjustmentAmount < 0 ? "refund" : "additional_payment";
      const adjustedAmount = Math.abs(adjustmentAmount);

      // Use appropriate paymentStatus based on the new cost and type
      const paymentStatus =
        adjustmentType === "additional_payment" ? "Pending" : "Completed"; // Use values allowed in the table

      // Insert into cost_update table
      const [adjustmentId] = await knex("cost_update")
        .insert({
          user_id: user_id,
          article_id: articleId,
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
        // is_paid: adjustmentType === "additional_payment" ? false : true,
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


// const getCostUpdatesByArticle = async (req, res) => {
//   // "original_cost": "1200.00",
//   //           "new_cost": "245.00",
//   //           "adjustment_amount": "955.00",
//   //           "adjustment_type": "refund",
//   //           "payment_status": "Completed",
//   //           "is_processed": false,
//   const user_id = req.user?.userId;
//   if (!user_id) {
//     return res.status(401).json({ error: "Unauthorized: User must be logged in" });
//   }

//   const articleId = req.params.id;

//   try {
//     // Verify if the article exists and belongs to the user
//     const article = await knex("create").where({ id: articleId, user_id }).first();
//     if (!article) {
//       return res.status(404).json({ error: "Article not found or you do not have access to this article" });
//     }

//     // Fetch cost updates related to the article and the user
//     // const costUpdates = await knex("cost_update")
//     //   .where({ article_id: articleId, user_id })
//     //   // .select("id", "original_cost", "new_cost", 
//     //   //   "adjustment_amount", "adjustment_type", "payment_status", "is_processed", "created_at", "updated_at");
//     //   console.log('costy updateess', costUpdates?.original_cost);

//    const costUpdates = await knex("cost_update")
//   .where({ article_id: articleId, user_id });

//   // const isPaidAndIsRefund = costUpdates.costUpdates.is_paid 
//   // //=== true && costUpdates.costUpdates.adjustment_type === 'refund';
//   // if(isPaidAndIsRefund) {
//   //   return res.status(400).json({ error: "Cannot reduce cost for a paid article" });
//   // }

// console.log('costUpdates array:', costUpdates); // Log the entire array
// console.log('articlees', article.is_paid)
// const checkIfisPaid = article.is_paid;

// // Ensure you always get the positive difference
// if (checkIfisPaid === true && costUpdates[0].adjustment_amount > 0) {
//   let x = costUpdates[0].adjustment_amount;
//   let y = costUpdates[0].original_cost;
//   const subtractAddedAmountAndOriginalCost = Math.abs(x - y);
  
//   // Determine if it's a refund or additional payment
//   if (x > y) {
//     console.log({ message: `You need to top up ${subtractAddedAmountAndOriginalCost} to your Account` });
//     return res.status(200).json({ message: `You need to top up ${subtractAddedAmountAndOriginalCost} to your Account` });
//   } else {
//     console.log({ message: `${subtractAddedAmountAndOriginalCost} has been refunded to your account` });
//     return res.status(200).json({ message: `${subtractAddedAmountAndOriginalCost} has been refunded to your account` });
//   }

// } else if (checkIfisPaid === false && costUpdates[0].new_cost > 0) {
//   const newCost = costUpdates[0].new_cost;
//   return res.status(200).json({ message: 'Payment pending', newCost });
  
// } else if (checkIfisPaid === true && costUpdates[0].adjustment_amount < costUpdates[0].original_cost) {
//   const refundAmount = Math.abs(costUpdates[0].original_cost - costUpdates[0].adjustment_amount);
//   return res.status(200).json({ message: `Refunded ${refundAmount} to your account` });
// }


// // Check if any results are returned
// if (costUpdates.length > 0) {
//   console.log('Original cost of first cost update:', costUpdates[0].original_cost);
// } else {
//   console.log('No cost updates found for the given article_id and user_id');
// }

    

//     // If no cost updates are found, return a suitable response
//     if (costUpdates.length === 0) {
//       return;
//     }

//     // Return the cost updates
//     return res.status(200).json({ costUpdates });
//   } catch (error) {
//     console.error("Error fetching cost updates:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

const getCostUpdatesByArticle = async (req, res) => {
  const user_id = req.user?.userId;
  if (!user_id) {
    return res.status(401).json({ error: "Unauthorized: User must be logged in" });
  }

  const articleId = req.params.id;

  try {
    // Verify if the article exists and belongs to the user
    const article = await knex("create").where({ id: articleId, user_id }).first();
    if (!article) {
      return res.status(404).json({ error: "Article not found or you do not have access to this article" });
    }

    // Fetch cost updates related to the article and the user
    const costUpdates = await knex("cost_update")
      .where({ article_id: articleId, user_id });

    if (costUpdates.length === 0) {
      return res.status(200).json({ 
        message: "No cost updates found"
      });
    }

    const checkIfIsPaid = article.is_paid;
    const { original_cost, new_cost, adjustment_amount } = costUpdates[0];
    
    // Calculate the difference between the new cost and the original cost
    const costDifference = Math.abs(new_cost - original_cost);

    // Always return original_cost and new_cost
    const response = {
      original_cost,
      new_cost
    };

    // If the article is paid but the new cost is higher, the user needs to top up
    console.log('is_paid:', checkIfIsPaid);
console.log('new_cost:', new_cost);
console.log('original_cost:', original_cost);

if (checkIfIsPaid === true && new_cost > original_cost) {
  const costDifference = Math.abs(new_cost - original_cost);
  console.log('Top-up needed: ', costDifference); // Log the difference
  return res.status(200).json({ 
    message: "You need to top up", 
    original_cost,
    new_cost,
    top_up_amount: costDifference        
  });
}

    // If the article is not paid, return "Payment pending" message
    else if (checkIfIsPaid === false && new_cost > 0) {
      return res.status(200).json({
        original_cost,
        new_cost,
        top_up_amount: new_cost,
        message: `You need to top up ${new_cost}`
      })
    } 
    // If is_paid is true and adjustment_amount < original_cost, handle refunds
    if (checkIfIsPaid === true && original_cost > new_cost) {
      const refundAmount = Math.abs(original_cost - new_cost);
      return res.status(200).json({
        original_cost,
        new_cost,
        refund_amount: refundAmount,
        refund: "Refund",
        message: `Refunded ${refundAmount} to your account.`
      });
    }


  
    

    // Return the response
    return res.status(200).json(response);

  } catch (error) {
    console.error("Error fetching cost updates:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


const deleteArticle = async (req, res) => {
  const { id } = req.params; // Get the article ID from the request parameters
  const user_id = req.user?.userId; // Get the logged-in user's ID from req.user

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Check if the article exists and belongs to the logged-in user
    const article = await knex("create").where({ id, user_id }).first();

    if (!article) {
      return res.status(404).json({ error: "Article not found or access denied" });
    }

    // Proceed to delete the article from the 'create' table
    await knex("create")
      .where({ id, user_id })
      .del();

    // Return success response
    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({
      error: "Failed to delete article",
    });
  }
};


const getDraftArticleByUser = async (req, res) => {
  const user_id = req.user?.userId; // Ensure the user is logged in

  if (!user_id) {
    return res
      .status(401)
      .json({ error: "Unauthorized: User must be logged in" });
  }

  try {
    // Fetch all articles from the 'create' table where 'is_paid' is false and the user is the creator
    const unpaidArticles = await knex("create")
      .where({ user_id, is_paid: false }) // Filter by user_id and is_paid = false
      .select("*");

    if (unpaidArticles.length === 0) {
      return res.status(404).json({ message: "No unpaid articles found" });
    }

    // Return the list of unpaid articles
    return res.status(200).json({
      message: "Unpaid articles retrieved successfully",
      articles: unpaidArticles
    });
  } catch (error) {
    console.error("Error fetching unpaid articles:", error);
    res.status(500).json({
      error: "Failed to retrieve unpaid articles",
    });
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
  getCostUpdatesByArticle,
  deleteArticle,
  getDraftArticleByUser,
};
