const express = require('express');
const { orderArticle, getOrderById, updateOrderToPaid, updatePaidOrdersToProcessing, getUserArticles, getUserArticlesByCount, countPendingProjects, countProcessingProjects, countPublishedProjects, getAllArticles, sumWordCountsByUserId, fetchRecentArticles, editArticle, getRecentArticleById, editArticleRequest, getCostUpdatesByArticle, deleteArticle, getDraftArticleByUser } = require('../../controllers/client/orderArticleController');
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

router.put('/articles/edit/:id', protect, editArticle);
router.get('/article/edit/getone/:id', protect, getRecentArticleById);
router.put('/article/request/edit/:id', protect, editArticleRequest);
router.get('/article/all/request/getone/:id', protect, getCostUpdatesByArticle);
router.delete('/article/request/deleteone/:id', protect, deleteArticle);
router.get('/articles/request/drafts/all', protect, getDraftArticleByUser);
router.get('/articles/request/getall', protect, getAllArticles);



// router.get('/articles/all',protect, sumWordCountsByUserId);



module.exports = router;
