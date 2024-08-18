const express = require('express');
const { verifyAdmin } = require('../../middlewares/admin/adminMiddleware.js');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { getEmailCopywritingRequests, getEmailCopywritingById } = require('../../controllers/admin/emailCopywritingController.js');

const router = express.Router();

router.get("/retrieve", protect,verifyAdmin, getEmailCopywritingRequests);
router.get("/retrieve/:id", protect,verifyAdmin, getEmailCopywritingById);


module.exports = router;