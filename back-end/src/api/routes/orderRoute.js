const express = require('express');
const { insertOrderInSale } = require('../controllers/orderController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const router = express.Router();

router.post('/order', jwtValidate, insertOrderInSale);

module.exports = router;
