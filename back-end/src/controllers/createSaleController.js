const express = require('express');
const mdwSales = require('../middlewares/mdwSales');
const mdwAuth = require('../middlewares/mdwAuth');

const pingRouter = express.Router();

pingRouter.post('/sale', mdwSales.mdwCreateSale);
pingRouter.post('/sales-products', mdwAuth.isValidToken, mdwSales.mdwCreateSalesProducts);

module.exports = pingRouter;
