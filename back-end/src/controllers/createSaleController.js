const express = require('express');
const mdwSales = require('../middlewares/mdwSales');
const mdwAuth = require('../middlewares/mdwAuth');
const {
    verifyRegisteredUser,
    registerUserInDB,
    generateTokenRegister,
} = require('../middlewares/mdwRegister');

const pingRouter = express.Router();

pingRouter.post('/user', verifyRegisteredUser, registerUserInDB, generateTokenRegister);
pingRouter.post('/sale', mdwAuth.isValidToken, mdwSales.mdwCreateSale);
pingRouter.post('/sales-products', mdwAuth.isValidToken, mdwSales.mdwCreateSalesProducts);

module.exports = pingRouter;
