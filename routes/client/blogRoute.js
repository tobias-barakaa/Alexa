const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { createBlog, updateBlog, getNumberOfWords, getTimeframe, getCategories, getBlog, getAllBlogs, getBlogsByUser, getTwoLatestPostByUser, getrecentBlogs } = require('../../controllers/client/blogController.js');

const router = express.Router();

//public routes

router.get('/numberofwords', getNumberOfWords);
router.get('/timeframe', getTimeframe);
router.get('/categories', getCategories);
 

// private routers
router.post('/createblog',protect, createBlog);
router.get('/getall',protect, getAllBlogs);
router.get('/getlatest',protect, getTwoLatestPostByUser);
router.get('/getrecent',protect, getrecentBlogs);


router.get('/usersblog',protect, getBlogsByUser);


router.get('/blogs/:id',protect, getBlog);
router.put('/updateblog/:id',protect, updateBlog);



  


module.exports = router;
