const knex = require('../../db/db.js');


// Controller function to handle order creation
const createPlaceOrder = async (req, res) => {
    try {
      // Extract the logged-in user ID from req.user
      const user_id = req.user?.userId;
  
      // If no user is logged in, return an error
      if (!user_id) {
        return res.status(401).json({ message: 'Unauthorized: User not logged in' });
      }
  
      const {
        projectType,
        title,
        description,
        budget,
        deadline,
        requirements,
        writerId,
      } = req.body;
  
      // Validate required fields
      if (!projectType || !title || !description || !budget || !deadline || !writerId) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
  
      // Check if the writer exists in the 'users' table and verify that the username matches
      const writer = await knex('writers_profile')
        .where({ id: writerId })
        .first();
  
      if (!writer) {
        return res.status(400).json({ message: 'Invalid writer ID or username' });
      }
  
      // Insert into the order_place table and capture the inserted row
      const [newOrder] = await knex('order_place').insert({
        project_type: projectType,
        title,
        description,
        requirements,
        budget,
        deadline,
        user_id, // Logged-in user placing the order
        writer_id: writerId, // Writer ID (foreign key to users table)
        status: 'Pending', // Default status
        is_paid: false, // Default to not paid
        balance: budget, // Initial balance is the full budget
        created_at: knex.fn.now(),
        updated_at: knex.fn.now(),
      }).returning('*'); // Return the newly created row
  
      // Return success response including the order ID
      return res.status(201).json({
        message: 'Order created successfully',
        order_id: newOrder.id, // Include the order ID in the response
      });
  
    } catch (error) {
      console.error('Error creating order_place:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
  

module.exports = { createPlaceOrder };
