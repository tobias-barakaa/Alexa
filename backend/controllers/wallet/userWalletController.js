const knex = require('../../db/db.js');

const getUserOrders = async (req, res) => {
  try {
    console.log(req.user); // This shows { userId: 4, role: 'client' }

    const loggedInUserId = req.user?.userId;

    if (!loggedInUserId) {
      return res.status(400).json({ error: 'User is not authenticated or user ID is missing' });
    }

    // Fetch orders for the logged-in user (ensure table name is correct)
    const orders = await knex('order').where({ user_id: loggedInUserId }); // Updated to 'orders'

    if (orders.length === 0) {
      return res.status(200).json({ message: 'No orders found for this user' });
    }

    // Fetch the user's username and profile_pic from the users table
    const user = await knex('users')
      .select('username', 'profile_pic')
      .where({ id: loggedInUserId })
      .first();

    console.log(user, 'this is user what is');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Append the user's username and profile_pic to each order
    const ordersWithUserInfo = orders.map(order => ({
      ...order,
      username: user.username,
      profile_pic: user.profile_pic
    }));

    console.log(ordersWithUserInfo, 'this is order with user info');

    // Send the response with orders and user info
    return res.json(ordersWithUserInfo);
  } catch (error) {
    console.error('Error fetching user orders:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUserOrders };
