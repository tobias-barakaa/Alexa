const express = require('express');
const { orderArticle } = require('../../controllers/client/orderArticleController');
// const { protect } = require('../../middlewares/client/authMiddleware');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { validateOrderArticle } = require('../../dataValidation/orderArticle.js');
require('dotenv').config();


const router = express.Router();



router.post('/order',validateOrderArticle, protect, orderArticle);
// router.get('/success', successPage);
// router.get('/cancel', cancelPage);
// router.get('/api/config/paypal', (req, res) => res.send({clientId: process.env.PAYPAL_CLIENT_ID}));



module.exports = router;
