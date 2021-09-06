const express = require('express');
const { mdwCustomerSales } = require('../middlewares/mdwCustomerSales');

const pingRouter = express.Router();

pingRouter.post('/orders', mdwCustomerSales);

module.exports = pingRouter;
