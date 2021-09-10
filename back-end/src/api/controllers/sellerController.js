const express = require('express');
const rescue = require('express-rescue');

const sellerService = require('../services/sellerService');
const jwtValidator = require('../middlewares/jwtValidator');
const { ok } = require('../utils/httpStatusCodes');

const sellerController = express.Router();

sellerController.get('/', jwtValidator, rescue(async (_req, res, next) => {
  const { error, sellers } = await sellerService.getSellers();

  if (error) return next(error);

  return res.status(ok).json({ sellers });
}));

sellerController.get('/orders/', jwtValidator, rescue(async (req, res, next) => {
  const { userId: sellerId } = req;

  const { error, orders } = await sellerService.getOrdersBySellerId(sellerId);

  if (error) return next(error);

  return res.status(ok).json({ orders });
}));

sellerController.get('/orders/:id', jwtValidator, rescue(async (req, res, next) => {
  const { id } = req.params;
  const { userId: sellerId } = req;

  const { error, order } = await sellerService.getOrderById(id, sellerId);

  if (error) return next(error);

  return res.status(ok).json({ order });
}));

sellerController.put('/orders/:id', jwtValidator, rescue(async (req, res, next) => {
  const { id } = req.params;
  const { status } = req.body;
  const { userId: sellerId } = req;

  const { error, response } = await sellerService.changeOrderStatus(id, sellerId, status);

  if (error) return next(error);

  return res.status(ok).json(response);
}));

module.exports = sellerController;
