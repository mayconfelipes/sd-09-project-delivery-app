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
  const dataBody = req.body;
  const { error, products } = await customerService.createCheckOut(dataBody);

  if (error) return next(error);

  return res.status(created).json({ products });
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

module.exports = customerController;
