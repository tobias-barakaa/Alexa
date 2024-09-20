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
      // Insert into the order table and get the orderId
      const [orderId] = await trx('order')
        .insert({
          user_id,
          cost,
          status,
          is_paid,
        })
        .returning('id');

      // Insert into the create table (or articles table) using the same orderId
      await trx('articles')  // Change 'articles' to your actual table name
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
          order_id: orderId, // Using the same orderId from the 'order' table
          status,
          is_paid,
        });

      res.status(201).json({
        message: "Order created successfully",
        orderId: orderId,  // Returning the same orderId
      });
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      error: "Failed to create order",
    });
  }
};




const getOrderById = async (req, res) => {
  const { id } = req.params; // Extract order ID from request parameters
  const user_id = req.user?.userId; // Ensure the user is logged in

  if (!user_id) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

  try {
    // Fetch the order from the 'order' table where the ID matches
    const order = await knex('create')
      .where({ id, user_id })
      .first(); // Get the first matching row

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    // Respond with the order details
    res.status(200).json({
      message: 'Order retrieved successfully',
      order,
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({
      error: 'Failed to retrieve order',
    });
  }
};


const updateOrderToPaid = async (req, res) => {
  const { id } = req.params; // Order ID from URL
  const { transactionId, payerId, status, email, amount } = req.body; // PayPal payment details
  console.log(req.body)
  const user_id = parseInt(req.user?.userId, 10); // Ensure user_id is an integer

  // Validate the ID and user ID
  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ error: 'Invalid order ID' });
  }

  if (!user_id || isNaN(user_id)) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

  try {
    // Check if the order exists for this user
    const order = await knex('order')
      .where({ id, user_id })
      .first();
      console.log(order)

    if (!order) {
      return res.status(404).json({ error: 'Order not found for this user' });
    }

    if (status !== 'COMPLETED') {
      return res.status(400).json({ error: 'Payment status is not completed' });
    }

    // Update the order to mark it as paid and store PayPal transaction details
    const updatedOrder = await knex('order')
      .where({ id, user_id })
      .update({
        is_paid: true,
        status: 'Completed', // Or any other status you prefer
        paypal_transaction_id: transactionId,
        paypal_payer_id: payerId,
        payer_email: email,
        paypal_amount: amount,
        updated_at: knex.fn.now(),
      })
      .returning('*'); // Return the updated order

    res.status(200).json({
      message: 'Order updated successfully',
      order: updatedOrder[0],
    });
  } catch (error) {
    console.error('Error updating order:', error);
    res.status(500).json({
      error: 'Failed to update order',
      details: error.message, // For debugging purposes
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
};
