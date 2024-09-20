const express = require('express');
const { orderArticle, getOrderById, updateOrderToPaid } = require('../../controllers/client/orderArticleController');
// const { protect } = require('../../middlewares/client/authMiddleware');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { validateOrderArticle } = require('../../dataValidation/orderArticle.js');
require('dotenv').config();

const router = express();

router.post('/articles',validateOrderArticle, protect, orderArticle);
router.get('/articles/:id', protect, getOrderById);
// router.get('/success', successPage);
// router.get('/cancel', cancelPage);
router.put('/articles/:id/pay', protect, updateOrderToPaid);


module.exports = router;
