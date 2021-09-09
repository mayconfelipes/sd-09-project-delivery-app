const express = require('express');
const SaleController = require('../database/controllers/SaleController');

const router = express.Router();

router.post('/checkout', SaleController.checkOut);
router.get('/orders/:id', SaleController.getOrderById);
router.get('/list-orders', SaleController.allPurchases);

module.exports = router;
