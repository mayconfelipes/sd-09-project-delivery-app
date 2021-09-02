const express = require('express');
const rescue = require('express-rescue');

const customerService = require('../services/registerService');
const jwtValidator = require('../middlewares/jwtValidator');
const { ok } = require('../utils/httpStatusCodes');

const registerController = express.Router();

customerController.get('/products', jwtValidator, rescue(async (req, res, next) => {
  const { error, products } = await registerService.getAll();

  if (error) {
    return next(error);
  }

  return res.status(ok).json({ products });
}));

module.exports = registerController;
