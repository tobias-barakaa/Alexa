const express = require("express");
const { validateEmailCopywriting } = require("../../dataValidation/emailCopywriting.js");
const { protect } = require("../../middlewares/client/authMiddleware.js");

const { emailCopywritingCreate, getEmailCopyWriting } = require("../../controllers/client/emailCopywritingController.js");


const router = express.Router();


router.post("/create",validateEmailCopywriting, protect, emailCopywritingCreate);
router.get("/getall", protect, getEmailCopyWriting);

// router.put('/update/:id',protect, updateArticleCreation);


module.exports = router;


validateEmailCopywriting