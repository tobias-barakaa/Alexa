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
router.get("/getall", protect, getAllBlogs);
router.get("/getlatest", protect, getTwoLatestPostByUser);
router.get("/getrecent", protect, getrecentBlogs);
router.get('/getcount', protect, getRecentBlogsCount)
// router.delete("/blogs/:id", protect, deleteBlog);
router.delete('/deleteblog/:blogId', protect, deleteBlog);


router.get("/usersblog", protect, getBlogsByUser);
router.get("/blogs/:id", protect, getBlog);
router.put('/editblog/:blogId', protect, editBlog);

// router.put('/editblog/:id', protect, editBlog);  

module.exports = router;

// const express = require("express");
// const { protect } = require("../../middlewares/client/authMiddleware.js");
// const {
//   createBlog,
//   updateBlog,
//   getNumberOfWords,
//   getTimeframe,
//   getCategories,
//   getBlog,
//   getAllBlogs,
//   getBlogsByUser,
//   getTwoLatestPostByUser,
//   getrecentBlogs,
// //   editBlog,
// //   deleteBlog,
// } = require("../../controllers/client/blogController.js");

// const router = express.Router();

// //public routes

// router.get("/numberofwords", getNumberOfWords);
// router.get("/timeframe", getTimeframe);
// router.get("/categories", getCategories);

// // private routers
// router.post("/createblog", protect, createBlog);
// router.get("/getall", protect, getAllBlogs);
// router.get("/getlatest", protect, getTwoLatestPostByUser);
// router.get("/getrecent", protect, getrecentBlogs);
// // router.put('/editblog/:id',protect, editBlog);

// // router.put("/blogs/:blogId", protect, editBlog);
// // router.delete("/blogs/:blogId", protect, deleteBlog);

// router.get("/usersblog", protect, getBlogsByUser);

// router.get("/blogs/:id", protect, getBlog);
// router.put("/updateblog/:id", protect, updateBlog);

// module.exports = router;
