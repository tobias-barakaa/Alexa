const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { createResume, getResumeById } = require('../../controllers/client/resumeController.js');

const router = express.Router();



router.post('/create', protect, createResume)
router.get('/get/:id', protect, getResumeById)



// router.post('/signin',protect,verifyAdmin, loginUser);

// router.post('/logout', protect, logoutUser);
// router.post('/getusers', protect, getAllUsers);


module.exports = router;
