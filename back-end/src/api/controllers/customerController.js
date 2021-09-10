const express = require('express');
const rescue = require('express-rescue');

const customerService = require('../services/customerService');
const jwtValidator = require('../middlewares/jwtValidator');
const { ok, created } = require('../utils/httpStatusCodes');

const customerController = express.Router();

customerController.get('/products', jwtValidator, rescue(async (_req, res, next) => {
  const { error, products } = await customerService.getProducts();

  if (error) {
    return next(error);
  }

  return res.status(ok).json({ products });
}));

customerController.post('/checkout', jwtValidator, rescue(async (req, res, next) => {
  const { sellerId, deliveryAddress, deliveryNumber, totalPrice, cart } = req.body;
  const { userId } = req;

  const { error, order } = await customerService
  .createCheckout({ sellerId, deliveryAddress, deliveryNumber, totalPrice, userId, cart });

  if (error) return next(error);

  return res.status(created).json({ order });
}));

customerController.get('/orders', jwtValidator, rescue(async (req, res, next) => {
  const { userId } = req;

  const { error, orders } = await customerService.getOrders(userId);

  if (error) return next(error);

  return res.status(ok).json({ orders });
}));

customerController.get('/orders/:id', jwtValidator, rescue(async (req, res, next) => {
  const { id } = req.params;

  const { error, order } = await customerService.getOrderById(id);

  if (error) {
    return next(error);
  }

  return res.status(ok).json({ order });
}));

customerController.put('/orders/:id', jwtValidator, rescue(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const { userId } = req;

  const { error, response } = await customerService.changeOrderStatus(id, userId, status);

  if (error) return next(error);

  return res.status(ok).json(response);
}));

module.exports = customerController;
