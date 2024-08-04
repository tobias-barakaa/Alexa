const express = require("express");
const { protect } = require("../../middlewares/client/authMiddleware.js");
const { createArticle, updateArticleCreation, getArticlesAfter30Minutes, getArticleCountAfter30Minutes } = require("../../controllers/client/articleCreationController.js");
const { validateArticleCreation } = require("../../dataValidation/articleCreation.js");
const { updateArticle } = require("../../controllers/client/articleController.js");


const router = express.Router();


// Private routes
router.post("/create",validateArticleCreation, protect, createArticle);
router.get("/getarticle",protect, getArticlesAfter30Minutes);
router.get("/articlecount",protect, getArticleCountAfter30Minutes);


router.put('/update/:id',protect, updateArticleCreation);


// router.get("/getall", protect, getAllBlogs);
// router.get("/getlatest", protect, getTwoLatestPostByUser);
// router.get("/getrecent", protect, getrecentBlogs);
// // router.delete("/blogs/:id", protect, deleteBlog);
// router.delete('/deleteblog/:blogId', protect, deleteBlog);


// router.get("/usersblog", protect, getBlogsByUser);
// router.get("/blogs/:id", protect, getBlog);
// router.put('/editblog/:blogId', protect, editBlog);

// router.put('/editblog/:id', protect, editBlog);  

module.exports = router;
