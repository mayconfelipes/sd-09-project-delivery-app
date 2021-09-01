const express = require('express');
const rescue = require('express-rescue');

const loginService = require('../services/loginService');
const loginValidator = require('../middlewares/loginValidator');
const { ok } = require('../utils/httpStatusCodes');

const loginController = express.Router();

loginController.post('/', loginValidator, rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const { error, token } = await loginService.login(email, password);
console.log(email, password);
  if (error) {
    return next(error);
  }

  return res.status(ok).json({ token });
}));

module.exports = loginController;
