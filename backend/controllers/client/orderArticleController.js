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

module.exports = {
  orderArticle,
};
