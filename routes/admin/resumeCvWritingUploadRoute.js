const express = require('express');
const upload = require('../../utils/multer.js')
const { protect } = require("../../middlewares/client/authMiddleware.js");
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { getUploadedArticleFiles } = require('../../controllers/admin/articleCreationUploadController.js');
const { uploadCvWritingFile } = require('../../controllers/admin/resumeCvWritingUploadController.js');

const router = express.Router();


router.post('/upload',protect,verifyAdmin, upload.single('file'), uploadCvWritingFile);
router.get('/upload/retrieve', protect, getUploadedArticleFiles);


module.exports = router;
