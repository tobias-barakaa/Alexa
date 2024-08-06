// routes/uploadRouter.js
const express = require('express');
const multer = require('multer');
const fileUploadController = require('../controllers/fileUploadController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configure multer for file upload

router.post('/link', upload.single('file'), fileUploadController.uploadFile);
router.get('/download/:id', fileUploadController.downloadFile);

module.exports = router;