const express = require('express');
const mdwSales = require('../middlewares/mdwSales');

const pingRouter = express.Router();

pingRouter.post('/sale', mdwSales.mdwCreateSale);

module.exports = pingRouter;