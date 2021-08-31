const express = require('express');
const { mdwSales, mdwSalesDetails } = require('../middlewares/mdwSales');

const pingRouter = express.Router();

pingRouter.post('/orders', mdwSales);

pingRouter.get('/details/:id', mdwSalesDetails);

module.exports = pingRouter;