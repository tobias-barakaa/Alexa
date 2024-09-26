const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { getArticles } = require('../../controllers/admin/adminArticleController.js');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');

const router = express.Router();

router.get('/articles/getall', protect, verifyAdmin, getArticles);



module.exports = router;
