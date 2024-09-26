const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { getArticles, getArticle } = require('../../controllers/admin/adminArticleController.js');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');

const router = express.Router();

router.get('/articles', protect, verifyAdmin, getArticles);
router.get('/articles/:id', protect, verifyAdmin, getArticle);




module.exports = router;
