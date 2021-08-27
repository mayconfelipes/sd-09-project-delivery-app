const express = require('express');
const rescue = require('express-rescue');

const loginService = require('../services/loginService');
const loginValidator = require('../middlewares/loginValidator');
const { ok } = require('../utils/httStatusCodes');

const loginController = express.Router();

loginController.post('/', loginValidator, rescue(async (req, res) => {
  const { email, password } = req.body;

  const token = await loginService.login(email, password);

  res.status(ok).json(token);
}));

module.exports = loginController;
