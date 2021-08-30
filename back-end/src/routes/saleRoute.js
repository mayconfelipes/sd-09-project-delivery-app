const express = require('express');
const SaleController = require('../database/controllers/SaleController');

const router = express.Router();

router.post('/checkout', SaleController.checkOut);

module.exports = router;