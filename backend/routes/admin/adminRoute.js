const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { addAdmin, loginAdmin, getUsers } = require('../../controllers/admin/adminController.js');

const router = express.Router();

router.post('/add-admin', addAdmin);
router.post('/login', loginAdmin);
router.get('/users', protect, getUsers);



module.exports = router;
