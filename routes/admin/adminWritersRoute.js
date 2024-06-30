const express = require('express');
const { protectAdmin, verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { getWriters } = require('../../controllers/admin/writersAdminController.js');

const router = express.Router();

router.get("/", protectAdmin, verifyAdmin, getWriters);


module.exports = router;
