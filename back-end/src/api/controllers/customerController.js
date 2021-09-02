const express = require('express');
const rescue = require('express-rescue');

const customerService = require('../services/customerService');
const jwtValidator = require('../middlewares/jwtValidator');
const { ok } = require('../utils/httpStatusCodes');

const customerController = express.Router();

customerController.get('/products', jwtValidator, rescue(async (_req, res, next) => {
  const { error, products } = await customerService.getAll();

  if (error) {
    return next(error);
  }

  return res.status(ok).json({ products });
}));

module.exports = customerController;
