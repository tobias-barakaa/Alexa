const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { signupUser, loginUser, logoutUser, getAllUsers } = require('../../controllers/client/clientController.js');

const router = express.Router();

router.post('/signup', validateSignup, signupUser);
router.post('/login', validateLogin, loginUser);

router.post('/logout', protect, logoutUser);
router.post('/getusers', protect, getAllUsers);


module.exports = router;
