const express = require('express');
const mdwSales = require('../middlewares/mdwSales');
const mdwAuth = require('../middlewares/mdwAuth');
const {
    verifyRegisteredUser,
    registerUserInDB,
} = require('../middlewares/mdwRegister');

const pingRouter = express.Router();

pingRouter.post('/user', mdwAuth.isValidToken, verifyRegisteredUser, registerUserInDB);
pingRouter.post('/sale', mdwAuth.isValidToken, mdwSales.mdwCreateSale);
pingRouter.post('/sales-products', mdwAuth.isValidToken, mdwSales.mdwCreateSalesProducts);

module.exports = pingRouter;
