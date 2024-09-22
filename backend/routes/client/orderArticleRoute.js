const express = require('express');
const { orderArticle, getOrderById, updateOrderToPaid, updatePaidOrdersToProcessing, getUserArticles, getUserArticlesByCount, countPendingProjects, countProcessingProjects, countPublishedProjects, getAllArticles, sumWordCountsByUserId, fetchRecentArticles } = require('../../controllers/client/orderArticleController');
// const { protect } = require('../../middlewares/client/authMiddleware');
const { protect } = require('../../middlewares/client/authMiddleware.js');
const { validateOrderArticle } = require('../../dataValidation/orderArticle.js');
require('dotenv').config();

const router = express();

router.post('/articles',validateOrderArticle, protect, orderArticle);
router.get('/articles/getone/:id', protect, getOrderById);
// router.get('/success', successPage);
// router.get('/cancel', cancelPage);
router.put('/articles/:id/pay', protect, updateOrderToPaid);
// router.put('/articles/')
router.put('/update-paid-to-processing', updatePaidOrdersToProcessing);
router.get('/userarticles', protect, getUserArticles);
router.get('/count', protect, getUserArticlesByCount);

router.get('/countpending', protect, countPendingProjects);
router.get('/countprocessing', protect, countProcessingProjects);
router.get('/countpublished/count', protect, countPublishedProjects);

router.get('/articles/recent', protect, fetchRecentArticles);


// router.get('/articles/all',protect, sumWordCountsByUserId);



module.exports = router;
