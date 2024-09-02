const express = require("express");
const { validateEmailCopywriting } = require("../../dataValidation/emailCopywriting.js");
const { protect } = require("../../middlewares/client/authMiddleware.js");

const { emailCopywritingCreate, getEmailCopyWriting, paypalSuccess } = require("../../controllers/client/emailCopywritingController.js");
const { getEmailCopyWritingCount } = require("../../controllers/client/articleCreationController.js");


const router = express.Router();


router.post("/create",validateEmailCopywriting, protect, emailCopywritingCreate);
router.get("/getall", protect, getEmailCopyWriting);
router.get("/getcount", protect, getEmailCopyWritingCount);

router.get('/config/paypal', (req, res) => {
    const  clientId = process.env.PAYPAL_CLIENT_ID
    console.log(clientId)
})

router.get('/success', paypalSuccess);

module.exports = router;


