const express = require('express');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { getAllResumes, getResumeById } = require('../../controllers/admin/cvResumeWriting.js');

const router = express.Router();

router.get("/retrieve", protect,verifyAdmin, getAllResumes);
router.get("/retrieve/:id", protect,verifyAdmin, getResumeById);



module.exports = router;