const express = require('express');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { getAllArticles } = require('../../controllers/admin/articleCreation.js');

const router = express.Router();

router.get("/retrieve", protect,verifyAdmin, getAllArticles);


module.exports = router;
