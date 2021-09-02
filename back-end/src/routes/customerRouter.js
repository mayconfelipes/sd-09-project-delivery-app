const express = require('express');

const customerRouter = express.Router();

const productController = require('../controllers/productController');
const validateToken = require('../middlewares/validateJWT');

customerRouter.get('/products', [
  validateToken, productController.getAllProducts,
]);

customerRouter.post('/checkout', productController.saveOrder);

module.exports = customerRouter;
