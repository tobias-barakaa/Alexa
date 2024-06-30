const express = require('express');
const { protectAdmin, verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { getWriters, assignArticle } = require('../../controllers/admin/writersAdminController.js');

const router = express.Router();

router.get("/", protectAdmin, verifyAdmin, getWriters);
router.post("/", protectAdmin, verifyAdmin, assignArticle);



module.exports = router;
