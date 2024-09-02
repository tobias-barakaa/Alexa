const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { downloadFile, fetchAllUploads, getFileId } = require('../../controllers/client/fileController.js');
const router = express.Router();


router.get('/:userId', protect, downloadFile);
router.get('/uploads', protect, fetchAllUploads)
router.get('/:fileId', protect, getFileId)



module.exports = router;
