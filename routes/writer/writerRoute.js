const express = require('express');
const { addWriter } = require('../../controllers/writers/writerController');
const router = express.Router();

router.post('/add-writer', addWriter);

module.exports = router;
