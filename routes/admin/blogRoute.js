const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { protectAdmin, verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { getAllBlogs } = require('../../controllers/admin/blogController.js');

const router = express.Router();

router.get('/admin/blogs', protect, verifyAdmin, getAllBlogs);

module.exports = router;
