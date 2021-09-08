const express = require('express');
const { getAllOrders } = require('../controllers/SellerController');
// const jwtValidate = require('../middlewares/jwtValidation');

const router = express.Router();

router.get('/orders', getAllOrders);

module.exports = router;
