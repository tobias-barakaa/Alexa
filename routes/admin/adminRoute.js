const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { addAdmin } = require('../../controllers/admin/adminController.js');

const router = express.Router();

router.post('/add-admin', addAdmin);
router.post('/signup', protect, addAdmin);


module.exports = router;
