
const express = require('express');
const upload = require('../../utils/multer.js')
const { fillWriterProfile, getWriterProfileByUsername } = require("../../controllers/writers/writerAccountController");
const { protectWriter } = require('../../middlewares/writers/writersMiddleware');

const router = express.Router();

// router.post('/writer-profile/fill',protectWriter, fillWriterProfile);
router.post('/writer-profile/fill', upload.single('image'), fillWriterProfile);




router.get('/writer-profile/:username', getWriterProfileByUsername);

module.exports = router;


