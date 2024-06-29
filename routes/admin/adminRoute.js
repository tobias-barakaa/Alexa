const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { addAdmin } = require('../../controllers/admin/adminController.js');

const router = express.Router();

router.post('/add-admin', addAdmin);


module.exports = router;