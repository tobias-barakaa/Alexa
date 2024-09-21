const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware');
const { getUserOrders } = require('../../controllers/wallet/userWalletController');


const router = express.Router();

router.post('/usertransactions',protect, getUserOrders);




module.exports = router;
