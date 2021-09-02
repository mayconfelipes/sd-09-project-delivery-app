const express = require('express');
const mdwProducts = require('../middlewares/mdwProducts');

const productsRouter = express.Router();

productsRouter.get('/', mdwProducts.findAllProducts);

module.exports = productsRouter;