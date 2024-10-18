
const express = require('express');
const { fillWriterProfile, getWriterProfileByUsername } = require("../../controllers/writers/writerAccountController");
const { protect } = require('../../middlewares/client/authMiddleware');
const { protectWriter } = require('../../middlewares/writers/writersMiddleware');

const router = express.Router();

router.post('/writer-profile/fill',protectWriter, fillWriterProfile);
router.get('/writer-profile/:username', getWriterProfileByUsername);

module.exports = router;


