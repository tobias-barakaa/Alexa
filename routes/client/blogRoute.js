const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { createBlog } = require('../../controllers/client/blogController.js');

const router = express.Router();

router.post('/createblog',protect, createBlog);


module.exports = router;
