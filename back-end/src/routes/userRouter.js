const express = require('express');

const deliveryRouter = express.Router();

const deliveryController = require('../controllers/userController');
const validateLogin = require('../middlewares/validateLogin');

deliveryRouter.post('/login', [
  validateLogin,
  deliveryController.loginController,
]);

deliveryRouter.post('/register', [
  deliveryController.registerController,
]);

module.exports = deliveryRouter;
