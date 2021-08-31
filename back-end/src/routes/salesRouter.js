const express = require('express');
const salesController = require('../controllers/salesController');
const validateJWT = require('../middlewares/validateJWT');

const salesRouter = express.Router();

salesRouter.get('/', [
  validateJWT,
  salesController.getAllSalesController,
]);

module.exports = salesRouter;
