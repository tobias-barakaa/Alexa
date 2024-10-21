const express = require('express');
const { createPlaceOrder, getUserOrders, assignedManagerGet } = require('../../controllers/writers/writerPlaceOrderController');
const { protect } = require('../../middlewares/client/authMiddleware');

const router = express.Router();

// POST route to create a new order
router.post('/place-order', protect, createPlaceOrder);
router.get('/get-limited-order', protect, getUserOrders)
router.get('/get-manager/:id', protect, assignedManagerGet)

module.exports = router;
