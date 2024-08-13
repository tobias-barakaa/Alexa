const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
// const { downloadFile } = require('../../controllers/admin/fileController.js');
const { downloadFile, fetchAllUploads, getFileId } = require('../../controllers/client/fileController.js');
// const { fetchAllUploads } = require('../../controllers/admin/fileUploadController.js');
const router = express.Router();



// router.post('/download/:id', protect, downloadFile);
// router.get('/download/:id',protect, downloadFile);
router.get('/:userId', protect, downloadFile);
router.get('/uploads', protect, fetchAllUploads)
router.get('/:fileId', protect, getFileId)

// get('/api/download/:fileId






// router.post('/signin',protect,verifyAdmin, loginUser);

// router.post('/logout', protect, logoutUser);
// router.post('/getusers', protect, getAllUsers);


module.exports = router;
