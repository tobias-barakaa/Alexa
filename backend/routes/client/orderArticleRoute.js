const express = require('express');
const { payProduct, successPage, cancelPage } = require('../../controllers/client/orderArticleController');
// const { protect } = require('../../middlewares/client/authMiddleware');
const { protect } = require('../../middlewares/client/authMiddleware.js');

const router = express.Router();



router.post('/order',protect, payProduct);
router.get('/success', successPage);
router.get('/cancel', cancelPage);
router.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID));



module.exports = router;
