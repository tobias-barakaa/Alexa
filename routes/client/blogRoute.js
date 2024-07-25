const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { createBlog, updateBlog, getNumberOfWords, getTimeframe, getCategories } = require('../../controllers/client/blogController.js');

const router = express.Router();

//public routes

router.get('/numberofwords', getNumberOfWords);
router.get('/timeframe', getTimeframe);
router.get('/categories', getCategories);

// private routers
router.post('/createblog',protect, createBlog);
router.put('/updateblog/:id',protect, updateBlog);


  


module.exports = router;
