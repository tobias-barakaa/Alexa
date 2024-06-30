const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { addAdmin, loginAdmin } = require('../../controllers/admin/adminController.js');

const router = express.Router();

router.post('/add-admin', addAdmin);
router.post('/login', loginAdmin);



module.exports = router;
