const express = require('express');

const router = express.Router();

const ControllerSales = require('../controllers/ControllerSales');
const { validJWT } = require('../middlewares');

router.post('/sales', validJWT, ControllerSales.sale);
router.get('/orders', validJWT, ControllerSales.getSalesByUserId);
router.get('/order/:saleId', validJWT, ControllerSales.getSalesBySaleId);

module.exports = router;
