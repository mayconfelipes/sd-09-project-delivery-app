const express = require('express');
const saleController = require('../controllers/saleController');

const saleRouter = express.Router();

saleRouter.get('/items/:id', saleController.getSaleItems);
saleRouter.get('/:id', saleController.getSaleById);

module.exports = saleRouter;
