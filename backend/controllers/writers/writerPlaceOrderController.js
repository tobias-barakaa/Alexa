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
  

  // const getUserOrders = async (req, res) => {
  //   try {
  //     // Extract the logged-in user ID from req.user
  //     const user_id = req.user?.userId;
  
  //     // If no user is logged in, return an error
  //     if (!user_id) {
  //       return res.status(401).json({ message: 'Unauthorized: User not logged in' });
  //     }
  
  //     // Fetch orders by the logged-in user, selecting the required fields along with user_id
  //     const orders = await knex('order_place')
  //       .select('id as order_id', 'user_id','title', 'description','status', 'writer_id','budget as amount', 'created_at', 'deadline', 'is_paid', 'budget')
  //       .where({ user_id });
  
  //     // If no orders are found, return a message
  //     if (orders.length === 0) {
  //       return res.status(404).json({ message: 'No orders found for this user' });
  //     }
  
  //     // Return the orders as a success response, including user_id
  //     return res.status(200).json({
  //       message: 'Orders retrieved successfully',
  //       orders
  //     });
  //   } catch (error) {
  //     console.error('Error fetching user orders:', error);
  //     return res.status(500).json({ message: 'Server error' });
  //   }  };
  
 
  const getUserOrders = async (req, res) => {
    try {
      // Extract the logged-in user ID from req.user
      const user_id = req.user?.userId;
  
      // If no user is logged in, return an error
      if (!user_id) {
        return res.status(401).json({ message: 'Unauthorized: User not logged in' });
      }
  
      // Fetch orders by the logged-in user, along with writer details
      const orders = await knex('order_place')
        .select(
          'order_place.id as order_id',
          'order_place.user_id',
          'order_place.title',
          'order_place.description',
          'order_place.status',
          'order_place.writer_id',
          'order_place.budget as amount',
          'order_place.created_at',
          'order_place.deadline',
          'order_place.is_paid',
          'order_place.budget',
          'writers_profile.id'
        )
        .leftJoin('writers_profile', 'order_place.writer_id', 'writers_profile.id') // Join with writers_profile table using writer_id
        .where({ 'order_place.user_id': user_id });
  
      // If no orders are found, return a message
      if (orders.length === 0) {
        return res.status(404).json({ message: 'No orders found for this user' });
      }
  
      // Return the orders as a success response, including writer details
      return res.status(200).json({
        message: 'Orders retrieved successfully',
        orders
      });
    } catch (error) {
      console.error('Error fetching user orders:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };
 
  

  const assignedManagerGet = async (req, res) => {
    try {
      // Extract the logged-in user ID from req.user
      const user_id = req.user?.userId;
  
      // If no user is logged in, return an error
      if (!user_id) {
        return res.status(401).json({ message: 'Unauthorized: User not logged in' });
      }
  
      // Extract writer_id from the request parameters (e.g., req.params.id)
      const writer_id = req.params.id;
  
      // If no writer_id is provided, return an error
      if (!writer_id) {
        return res.status(400).json({ message: 'Bad request: writer_id is required' });
      }
  
      // Fetch the writer's profile details from the 'writers_profile' table
      const writerProfile = await knex('writers_profile')
        .select('first_name', 'last_name', 'profile_visible', 'verified', 'profile_pic')
        .where({ id: writer_id })
        .first(); // Fetch a single result
  
      // If no writer is found, return a not found error
      if (!writerProfile) {
        return res.status(404).json({ message: 'Writer not found' });
      }
  
      // Return the writer's profile details as a success response
      return res.status(200).json({
        message: 'Writer profile retrieved successfully',
        writer: writerProfile
      });
    } catch (error) {
      console.error('Error fetching writer profile:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  };
  
  

module.exports = { createPlaceOrder, getUserOrders, assignedManagerGet };
