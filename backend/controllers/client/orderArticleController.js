const knex = require('../../db/db.js');

// Create a new orderArticle
// const orderArticle = async (req, res) => {
//   const user_id = req.user?.userId;

//   if (!user_id) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   // Check if the user exists in the users table
//   const userExists = await knex('users').where({ id: user_id }).first();
//   if (!userExists) {
//     return res.status(400).json({ error: "Invalid user: User not found" });
//   }

//   const {
//     title,
//     description,
//     keywords,
//     word_count = "300 words",
//     duration = "1 day",
//     complexity = "General",
//     language = "American English",
//     quantity = 1,
//     cost = 50.0,
//     status = "Pending",
//     is_paid = false,
//   } = req.body;

//   try {
//     const [newOrderId] = await knex("create")
//       .insert({
//         title,
//         description,
//         keywords,
//         word_count,
//         duration,
//         complexity,
//         language,
//         quantity,
//         user_id,
//         cost,
//         status,
//         is_paid,
//       })
//       .returning("id");

//     res.status(201).json({
//       message: "Order created successfully",
//       orderId: newOrderId,
//     });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({
//       error: "Failed to create order",
//     });
//   }
// };

// const orderArticle = async (req, res) => {
//   const user_id = req.user?.userId;

//   if (!user_id) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   // Check if the user exists in the users table
//   const userExists = await knex('users').where({ id: user_id }).first();
//   if (!userExists) {
//     return res.status(400).json({ error: "Invalid user: User not found" });
//   }

//   const {
//     title,
//     description,
//     keywords,
//     word_count = "500 words",
//     duration = "3 days",
//     complexity = "Expert",
//     language = "Canadian English",
//     quantity = 6,
//     cost = 510.00,
//     status = "Pending",
//     is_paid = false,
//   } = req.body;

//   try {
//     // Create an order in the 'orders' table first
//     const [orderId] = await knex("create")
//       .insert({
//         user_id, // Ensure you have user_id here
//         status: "Pending",
//         // Add other relevant fields for the 'orders' table
//       })
//       .returning("id");

//     // Use the generated 'orderId' when inserting into 'create_article'
//     const [newArticleId] = await knex("create_article")
//       .insert({
//         order_id: orderId, // Pass the correct 'order_id'
//         title,
//         description,
//         keywords,
//         word_count,
//         duration,
//         complexity,
//         language,
//         quantity,
//         user_id,
//         cost,
//         status,
//         is_paid,
//       })
//       .returning("id");

//     res.status(201).json({
//       message: "Order created successfully",
//       articleId: newArticleId,
//     });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     res.status(500).json({
//       error: "Failed to create order",
//     });
//   }
// };

const orderArticle = async (req, res) => {
  const user_id = req.user?.userId;

  if (!user_id) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

  // Optional: Check if the user exists in the users table
  const userExists = await knex('users').where({ id: user_id }).first();
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

  try {
    await knex.transaction(async trx => {
      // Insert into the 'create' table (which stores articles)
      const [article] = await trx('create')
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
        .returning('id'); // Return the ID of the inserted article

      const articleId = article.id; // Ensure we extract the 'id' from the result

      res.status(201).json({
        message: "Article created successfully",
        articleId: articleId,  // Returning the article ID
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
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

  try {
    // Fetch the article from the 'create' table where the ID matches
    const article = await knex('create')
      .where({ id, user_id })
      .first(); // Get the first matching row

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    // Respond with the article details
    res.status(200).json({
      message: 'Article retrieved successfully',
      article, // Return the article
    });
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({
      error: 'Failed to retrieve article',
    });
  }
};


















// const getOrderById = async (req, res) => {
//   const { id } = req.params; // Extract order ID from request parameters
//   const user_id = req.user?.userId; // Ensure the user is logged in

//   if (!user_id) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   try {
//     // Fetch the order from the 'order' table where the ID matches
//     const order = await knex('create')
//       .where({ id, user_id })
//       .first(); // Get the first matching row

//     if (!order) {
//       return res.status(404).json({ error: 'Order not found' });
//     }

//     // Respond with the order details
//     res.status(200).json({
//       message: 'Order retrieved successfully',
//       order,
//     });
//   } catch (error) {
//     console.error('Error fetching order:', error);
//     res.status(500).json({
//       error: 'Failed to retrieve order',
//     });
//   }
// };


// const updateOrderToPaid = async (req, res) => {
//   const { id } = req.params; // Order ID from URL
//   console.log(id, 'whats in the id')
//   const { transactionId, payerId, status, email, amount } = req.body; // PayPal payment details
//   console.log(req.body, 'whats in the body')
//   const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer
//   console.log(user_id, 'whats in the user_id')

//   // Validate the ID and user ID
//   if (!id || isNaN(Number(id))) {
//     return res.status(400).json({ error: 'Invalid order ID' });
//   }

//   if (!user_id || isNaN(user_id)) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   try {
//     // Check if the order exists for this user
//     const order = await knex('create')
//       .where({ id, user_id })
//       .first();
//       console.log(order, 'whats in the order');

//     if (!order) {
//       return res.status(404).json({ error: 'Order not found for this user' });
//     }

//     if (status !== 'COMPLETED') {
//       return res.status(400).json({ error: 'Payment status is not completed' });
//     }

//     // Update the order to mark it as paid and store PayPal transaction details
//     const updatedOrder = await knex('order')
//       .where({ id, user_id })
//       .update({
//         is_paid: true,
//         status: 'Completed', // Or any other status you prefer
//         paypal_transaction_id: transactionId,
//         paypal_payer_id: payerId,
//         payer_email: email,
//         paypal_amount: amount,
//         updated_at: knex.fn.now(),
//       })
//       .returning('*'); // Return the updated order

//     res.status(200).json({
//       message: 'Order updated successfully',
//       order: updatedOrder[0],
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
  const { id } = req.params; // Order ID from URL
  console.log(id, 'whats in the id');
  
  const { transactionId, payerId, status, email, amount } = req.body; // PayPal payment details
  console.log(req.body, 'whats in the body');
  
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer
  console.log(user_id, 'whats in the user_id');

  // Validate the ID and user ID
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid order ID' });
  }

  if (!user_id || isNaN(user_id)) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

  // Ensure the payment status is completed
  if (status !== 'COMPLETED') {
    return res.status(400).json({ error: 'Payment status is not completed' });
  }

  try {
    // Use a transaction to update both `create` and `order` tables atomically
    const updatedOrder = await knex.transaction(async (trx) => {
      // Check if the order exists in the `create` table
      const orderInCreateTable = await trx('create')
        .where({ id, user_id })
        .first();
      console.log(orderInCreateTable, 'whats in the create table order');

      if (!orderInCreateTable) {
        throw new Error('Order not found for this user in create table');
      }

      // Update the `create` table if necessary (you can customize this as needed)
      await trx('create')
        .where({ id, user_id })
        .update({
          // Any fields you want to update in the `create` table
          is_paid: true, // Example field
          status: 'Processing',
          updated_at: trx.fn.now(),
        });

      // Update the `order` table
      const updatedOrderInOrderTable = await trx('order')
        .where({ id, user_id })
        .update({
          is_paid: true,
          status: 'Completed',
          paypal_transaction_id: transactionId,
          paypal_payer_id: payerId,
          payer_email: email,
          paypal_amount: amount,
          updated_at: trx.fn.now(),
        })
        .returning('*'); // Return the updated order

      // Return the updated order from the `order` table
      return updatedOrderInOrderTable[0];
    });

    res.status(200).json({
      message: 'Order updated successfully',
      order: updatedOrder,
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({
      error: 'Failed to update order',
      details: error.message, // For debugging purposes
    });
  }
};








const updatePaidOrdersToProcessing = async (req, res) => {
  try {
    // Fetch all orders that are paid but still pending
    const paidOrders = await knex('order')
      .where({ is_paid: true, status: 'Pending' });

    // If no paid orders are found, keep them as pending
    if (paidOrders.length === 0) {
      return res.status(200).json({ message: 'No paid orders to update, status remains pending' });
    }

    // Update the status of paid orders to 'Processing'
    await knex('create')
      .where({ is_paid: true, status: 'Pending' })
      .update({
        status: 'Processing',
        updated_at: knex.fn.now(),
      });

    res.status(200).json({ message: 'Orders now in processing mode' });
  } catch (error) {
    console.error('Error updating orders:', error);
    res.status(500).json({ error: 'Failed to update orders', details: error.message });
  }
};



const getUserArticles = async (req, res) => {
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer
  console.log(user_id, 'Logged-in user ID');

  // Validate the user_id
  if (!user_id || isNaN(user_id)) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

  try {
    // Fetch articles only created by the logged-in user
    const userArticles = await knex('create') // Assuming 'create' is the table for articles
      .where({ user_id })
      .select('*'); // Fetch all columns (or specify only the needed ones)

    if (userArticles.length === 0) {
      return res.status(404).json({ message: 'No articles found for this user' });
    }

    res.status(200).json({
      message: 'User articles retrieved successfully',
      articles: userArticles,
    });
  } catch (error) {
    console.error('Error fetching user articles:', error);
    res.status(500).json({
      error: 'Failed to fetch user articles',
      details: error.message,
    });
  }
};


const getUserArticlesByCount = async (req, res) => {
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer

  // Validate the user_id to make sure it's a valid integer
  if (!user_id || isNaN(user_id)) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }
  
  try {
    // Fetch all articles created by the user
    const userArticles = await knex('create')
      .where({ user_id }) // Ensure user_id is correctly queried as an integer
      .select('*');

    // Check if no articles were found
    if (userArticles.length === 0) {
      return res.status(404).json({ message: 'No articles found for this user' });
    }

    // Return the articles and the total count
    res.status(200).json({
      message: 'Articles retrieved successfully',
      count: userArticles.length,  // Total number of articles
      articles: userArticles,       // Article data
    });
  } catch (error) {
    console.error('Error fetching user articles:', error);
    res.status(500).json({
      error: 'Failed to fetch articles',
      details: error.message,
    });
  }
};
















// const updateOrderToPaid = async (req, res) => {
//   const { id } = req.params;  // Extract ID from route parameters
//   const user_id = parseInt(req.user?.userId, 10);  // Ensure user_id is an integer

//   // Validate the ID and user ID
//   if (!id || isNaN(Number(id))) {
//     return res.status(400).json({ error: 'Invalid order ID' });
//   }

//   if (!user_id || isNaN(user_id)) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   try {
//     // Check if the order exists for this user
//     const order = await knex('order_articles')
//       .where({ id, user_id })  // Use both id and user_id for security
//       .first();

//     if (!order) {
//       return res.status(404).json({ error: 'Order not found for this user' });
//     }

//     // Update the order to mark it as paid
//     const updatedOrder = await knex('order_articles')
//       .where({ id, user_id })
//       .update({
//         is_paid: true,
//         status: req.body.status || 'Completed',  // Ensure status is provided or default to 'Completed'
//         updated_at: knex.fn.now(),
//       })
//       .returning('*');  // Return the updated order

//     res.status(200).json({
//       message: 'Order updated successfully',
//       order: updatedOrder[0],  // Returning the first result since returning() returns an array
//     });
//   } catch (error) {
//     console.error('Error updating order:', error);
//     res.status(500).json({
//       error: 'Failed to update order',
//       details: error.message,  // Send error details for debugging
//     });
//   }
// };

// const updateOrderToPaid = async (req, res) => {
//   const { id } = req.params;  // Extract ID from route parameters
//   const user_id = parseInt(req.user?.userId, 10);  // Ensure user_id is an integer

//   // Validate the ID and user ID
//   if (!id || isNaN(Number(id))) {
//     return res.status(400).json({ error: 'Invalid order ID' });
//   }

//   if (!user_id || isNaN(user_id)) {
//     return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
//   }

//   try {
//     // Check if the order exists for this user
//     const order = await knex('order_articles')
//       .where({ id, user_id })  // Use both id and user_id for security
//       .first();

//     if (!order) {
//       return res.status(404).json({ error: 'Order not found for this user' });
//     }

//     // Update the order to mark it as paid
//     const updatedOrder = await knex('order_articles')
//       .where({ id, user_id })
//       .update({
//         is_paid: true,
//         status: req.body.status || 'Completed',  // Ensure status is provided or default to 'Completed'
//         updated_at: knex.fn.now(),
//       })
//       .returning('*');  // Return the updated order

//     res.status(200).json({
//       message: 'Order updated successfully',
//       order: updatedOrder[0],  // Returning the first result since returning() returns an array
//     });
//   } catch (error) {
//     console.error('Error updating order:', error);
//     res.status(500).json({
//       error: 'Failed to update order',
//       details: error.message,  // Send error details for debugging
//     });
//   }
// }



module.exports = {
  orderArticle,
  getOrderById,
  updateOrderToPaid,
  updatePaidOrdersToProcessing,
  getUserArticles,
  getUserArticlesByCount
};
