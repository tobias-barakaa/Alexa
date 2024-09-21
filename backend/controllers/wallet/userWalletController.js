const knex = require('../../db/db.js');


const getUserOrders = async (req, res) => {
    try {
      const loggedInUserId = req.user.id; 
  
      const orders = await knex('orders').where({ user_id: loggedInUserId });
  
      
      const user = await knex('users')
        .select('username', 'profile_pic')
        .where({ id: loggedInUserId })
        .first();
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      const ordersWithUserInfo = orders.map(order => ({
        ...order,
        username: user.username,
        profile_pic: user.profile_pic
      }));
        return res.json(ordersWithUserInfo);
    } catch (error) {
      console.error('Error fetching user orders:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

module.exports = { getUserOrders };
