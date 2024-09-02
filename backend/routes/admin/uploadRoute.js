const express = require('express');
const upload = require('../../utils/multer.js')
const { protect } = require("../../middlewares/client/authMiddleware.js");
const { uploadFile, getUploadedFiles } = require('../../controllers/admin/fileUploadController.js');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');

const router = express.Router();


router.post('/link/foryou',protect,verifyAdmin, upload.single('file'), uploadFile);
router.get('/link', protect, getUploadedFiles)


module.exports = router;
