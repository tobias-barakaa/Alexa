const { order } = require('paypal-rest-sdk');
const knex = require('../../db/db.js');

const getUserOrders = async (req, res) => {
  try {
    // Log the user info to check if req.user is populated correctly
    console.log(req.user); // This shows { userId: 4, role: 'client' }

    // Use req.user.userId instead of req.user.id
    const loggedInUserId = req.user?.userId; // Adjusted to userId

    // Handle the case where the user ID is not available
    if (!loggedInUserId) {
      return res.status(400).json({ error: 'User is not authenticated or user ID is missing' });
    }

    // Fetch orders for the logged-in user
    const orders = await knex('order').where({ user_id: loggedInUserId });

    // Fetch the user's username and profile_pic from the users table
    const user = await knex('users')
      .select('username', 'profile_pic')
      .where({ id: loggedInUserId }) // Assuming 'id' is the correct field for user in 'users' table
      .first();
console.log(user, 'this is user what is')
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Append the user's username and profile_pic to each order
    const ordersWithUserInfo = orders.map(order => ({
      ...order,
      username: user.username,
      profile_pic: user.profile_pic
    }));

    console.log(ordersWithUserInfo, 'this is order with user info')

    // Send the response with orders and user info
    return res.json(ordersWithUserInfo);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUserOrders };
