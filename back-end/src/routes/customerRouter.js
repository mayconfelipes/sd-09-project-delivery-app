const express = require('express');

const customerRouter = express.Router();

const productController = require('../controllers/productController');

customerRouter.get('/products', [
  productController.getAllProducts,
]);

module.exports = customerRouter;
