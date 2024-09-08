const express = require('express');
const { payProduct, successPage, cancelPage } = require('../../controllers/client/paypalController');
const router = express.Router();



router.post('/order', payProduct);
router.get('/success', successPage);
router.get('/cancel', cancelPage);



module.exports = router;
