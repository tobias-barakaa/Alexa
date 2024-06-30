const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { createArticle } = require('../../controllers/client/articleController.js');

const router = express.Router();




router.post("/order", protect, createArticle)