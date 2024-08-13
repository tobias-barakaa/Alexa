const express = require("express");
const { protect } = require("../../middlewares/client/authMiddleware.js");
const {
  createBlog,
  getNumberOfWords,
  getTimeframe,
  getCategories,
  getBlog,
  getAllBlogs,
  getBlogsByUser,
  getTwoLatestPostByUser,
  getrecentBlogs,
  editBlog,
  deleteBlog,
  getRecentBlogsCount,
} = require("../../controllers/client/blogController.js");

const router = express.Router();

// Public routes
router.get("/numberofwords", getNumberOfWords);
router.get("/timeframe", getTimeframe);
router.get("/categories", getCategories);


// Private routes
router.post("/createblog", protect, createBlog);
// router.get("/getall", protect, getAllBlogs);
router.get("/getlatest", protect, getTwoLatestPostByUser);
router.get("/getrecent", protect, getrecentBlogs);
router.get('/getcount', protect, getRecentBlogsCount)

router.delete('/deleteblog/:blogId', protect, deleteBlog);


router.get("/usersblog", protect, getBlogsByUser);
router.get("/blogs/:id", protect, getBlog);
router.put('/editblog/:blogId', protect, editBlog);


module.exports = router;
