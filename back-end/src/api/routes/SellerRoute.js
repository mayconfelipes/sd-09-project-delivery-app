const express = require('express');
const { getAllOrders } = require('../controllers/SellerController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const router = express.Router();

router.get('/orders/:email', jwtValidate, getAllOrders);

module.exports = router;
