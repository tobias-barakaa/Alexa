const express = require("express");
const { protect } = require("../../middlewares/client/authMiddleware.js");
const { createArticle, updateArticleCreation, getArticlesAfter30Minutes, getArticleCountAfter30Minutes, deleteArticleCreation } = require("../../controllers/client/articleCreationController.js");
const { validateArticleCreation } = require("../../dataValidation/articleCreation.js");
const { updateArticle } = require("../../controllers/client/articleController.js");


const router = express.Router();


// Private routes
router.post("/create",validateArticleCreation, protect, createArticle);
router.get("/getarticle",protect, getArticlesAfter30Minutes);
router.get("/articlecount",protect, getArticleCountAfter30Minutes);
router.delete("/deletearticle",protect, deleteArticleCreation);



router.put('/update/:id',protect, updateArticleCreation);


module.exports = router;
