const express = require('express');
const upload = require('../../utils/multer.js')
const { protect } = require("../../middlewares/client/authMiddleware.js");
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { uploadEmailCopywritingFile, getUploadedEmailCopywritingFiles } = require('../../controllers/admin/emailCopywritingUploadController.js');
//const { uploadArticleFile, getUploadedArticleFiles } = require('../../controllers/admin/articleCreationUploadController.js');

const router = express.Router();


router.post('/upload',protect,verifyAdmin, upload.single('file'), uploadEmailCopywritingFile);
router.get('/upload/retrieve', protect, getUploadedEmailCopywritingFiles);

module.exports = router;
