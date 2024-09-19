const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { signupUser, loginUser, google, logoutUser, sendPasswordLink, passwordForgot, changePassword } = require('../../controllers/client/clientController.js');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', loginUser);
router.post('/google', google);
router.post('/logout', protect, logoutUser);

// change password
router.post('/sendpasswordlink', sendPasswordLink);
router.get('/passwordforgot/:id/:token', passwordForgot);
router.post('/:id/:token', changePassword);


module.exports = router;
