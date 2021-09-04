const express = require('express');
const salesController = require('../controllers/salesController');
const validateJWT = require('../middlewares/validateJWT');

const salesRouter = express.Router();

salesRouter.get('/items/:id', salesController.getSaleItems);
salesRouter.get('/:id', salesController.getSaleById);
salesRouter.get('/', [
  validateJWT,
  salesController.getAllSalesController,
]);
salesRouter.put('/:id', salesController.changeOrderStatus);

module.exports = salesRouter;
