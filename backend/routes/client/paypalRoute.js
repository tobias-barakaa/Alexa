const express = require('express');
const router = express.Router();



router.post('/order', payProduct);
router.get('/success', successPage);
router.get('/cancel', cancelPage);



module.exports = router;
