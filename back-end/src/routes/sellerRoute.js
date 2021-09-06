const express = require('express');
const SaleController = require('../database/controllers/SaleController');

const router = express.Router();

router.get('/', SaleController.allSales);

module.exports = router;
