const express = require('express');
const { payProduct, successPage, cancelPage } = require('../../controllers/client/paypalController');
const router = express.Router();



router.post('/orde', payProduct);
router.get('/succes', successPage);
router.get('/cance', cancelPage);



module.exports = router;
