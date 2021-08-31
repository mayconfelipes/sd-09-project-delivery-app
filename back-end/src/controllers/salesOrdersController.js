const express = require('express');
const { mdwSales, mdwSalesDetails } = require('../middlewares/mdwSales');

const pingRouter = express.Router();

pingRouter.get('/orders', mdwSales);

pingRouter.get('/details', mdwSalesDetails);

module.exports = pingRouter;