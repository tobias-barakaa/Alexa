const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { signupUser, loginUser } = require('../../controllers/client/clientController.js');
const verifyAdmin = require('../../middlewares/admin/adminMiddleware.js');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin',protect,verifyAdmin, loginUser);

// router.post('/logout', protect, logoutUser);
// router.post('/getusers', protect, getAllUsers);


module.exports = router;
