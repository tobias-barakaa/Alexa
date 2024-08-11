const express = require('express');
const multer = require('multer');
// const { protect } = require('../../middlewares/client/authMiddleware.js');
const { protect } = require("../../middlewares/client/authMiddleware.js");


const { uploadFile, downloadFile } = require("../../controllers/admin/fileUploadController")
// const { uploadFile, downloadFile } = require('../../controllers/fileUploadController'); // Adjust the path if needed

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Configure multer for file upload

// router.post('/link', upload.single('file'), uploadFile);

router.post('/link/:blogId',protect, (req, res, next) => {
    next();
  }, upload.single('file'), uploadFile);


//   router.post('/link', upload.single('file'), (req, res, next) => {
//     uploadFile(req, res).catch(next);
//   });
router.get('/download/:id',protect, downloadFile);

module.exports = router;
