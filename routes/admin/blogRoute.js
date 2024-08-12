const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { uploadRouteverifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { getAllBlogs, getBlogById } = require('../../controllers/admin/blogController.js');

const router = express.Router();

router.get('/admin/blogs', protect, 
    // verifyAdmin
     getAllBlogs);

router.get('/admin/blogs/:id', protect, 
    // verifyAdmin,
     getBlogById);




module.exports = router;
