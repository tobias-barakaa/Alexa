const express = require('express');
const { addWriter, loginWriter } = require('../../controllers/writers/writerController');
const router = express.Router();

router.post('/add-writer', addWriter);
router.post('/signin', loginWriter);

module.exports = router;
