const express = require('express');
const { createPlaceOrder } = require('../../controllers/writers/writerPlaceOrderController');
const { protect } = require('../../middlewares/client/authMiddleware');

const router = express.Router();

// POST route to create a new order
router.post('/place-order', protect, createPlaceOrder);

module.exports = router;
