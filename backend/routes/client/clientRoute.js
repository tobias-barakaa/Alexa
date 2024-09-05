const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { signupUser, loginUser, google, logoutUser, sendPasswordLink } = require('../../controllers/client/clientController.js');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');

const router = express.Router();

router.post('/signup', signupUser);
router.post('/signin', loginUser);
router.post('/google', google);
router.post('/logout', protect, logoutUser);

router.post('/sendpasswordlink', sendPasswordLink);

module.exports = router;
