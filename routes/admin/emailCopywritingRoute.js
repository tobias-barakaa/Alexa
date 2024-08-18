const express = require('express');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { getAllArticles, getArticleById } = require('../../controllers/admin/articleCreation.js');

const router = express.Router();

router.get("/retrieve", protect,verifyAdmin, getAllArticles);
router.get("/retrieve/:id", protect,verifyAdmin, getArticleById);



module.exports = router;