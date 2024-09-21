const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware');
const { getUserOrders } = require('../../controllers/wallet/userWalletController');


const router = express.Router();

router.post('/add-admin',protect, getUserOrders);




module.exports = router;
