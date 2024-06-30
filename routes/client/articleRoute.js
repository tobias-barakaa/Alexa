const express = require('express');
const { protect } = require('../../middlewares/client/authMiddleware.js');

const router = express.Router();




router.post("/articles", protect, article)

app.use('/api/articles', protect, articleRoutes);
