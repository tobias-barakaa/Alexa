const express = require('express');
const { getArticles } = require('../../controllers/admin/articleAdminController.js');
const { protectAdmin, verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');

const router = express.Router();

router.get("/order", protectAdmin, verifyAdmin, getArticles);


module.exports = router;
