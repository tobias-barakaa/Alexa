const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { createResume, getResumeById, getResumeCount, getRecentResumes } = require('../../controllers/client/resumeController.js');

const router = express.Router();



router.post('/create', protect, createResume)
router.get('/getrecent', protect, getRecentResumes)

router.get('/get/:id', protect, getResumeById)
router.get('/getcount', protect, getResumeCount)



// router.post('/signin',protect,verifyAdmin, loginUser);

// router.post('/logout', protect, logoutUser);
// router.post('/getusers', protect, getAllUsers);


module.exports = router;
