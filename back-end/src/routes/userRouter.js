const express = require('express');

const deliveryRouter = express.Router();

const deliveryController = require('../controllers/userController');
const validateLogin = require('../middlewares/validateLogin');

deliveryRouter.post('/login', [
  validateLogin,
  deliveryController.loginController,
]);

module.exports = deliveryRouter;
