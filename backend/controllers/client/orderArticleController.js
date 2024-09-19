const knex = require('../../db/db.js');

// Create a new orderArticle
const orderArticle = async (req, res) => {
  // Ensure the user is logged in
  const user_id = req.user?.userId;

  if (!user_id) {
    return res.status(401).json({ error: 'Unauthorized: User must be logged in' });
  }

    // Extract the order data from the request body
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
    // Insert the new order into the order table
    const [newOrderId] = await knex("order")
      .insert({
        title,
        description,
        keywords,
        word_count,
        duration,
        complexity,
        language,
        quantity,
        user_id, // Associate the order with the logged-in user
        cost,
        status,
        is_paid,
      })
      .returning("id"); // Returning the newly created order ID

    // Respond with success and the new order ID
    res.status(201).json({
      message: "Order created successfully",
      orderId: newOrderId,
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
    const order = await knex('order')
      .where({ id, user_id }) // Match both order ID and user ID for security
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

module.exports = {
  orderArticle,
  getOrderById,
};
