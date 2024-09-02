
const express = require('express');
const { fillWriterProfile } = require("../../controllers/writers/writerAccountController");
const { protect } = require('../../middlewares/client/authMiddleware');
const { protectWriter } = require('../../middlewares/writers/writersMiddleware');

const router = express.Router();

router.post('/writer-profile',protectWriter, fillWriterProfile);

module.exports = router;


