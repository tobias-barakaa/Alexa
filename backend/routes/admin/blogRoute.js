const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { uploadRouteverifyAdmin, verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { getAllBlogs, getBlogById, deleteAllBlogs } = require('../../controllers/admin/blogController.js');

const router = express.Router();

router.get('/admin/blogs', protect, 
    verifyAdmin,
     getAllBlogs);

router.get('/admin/blogs/:blogId', protect, 
    verifyAdmin,
     getBlogById);
     router.delete('/admin/blogs/delete-all',protect, verifyAdmin, deleteAllBlogs);




module.exports = router;
