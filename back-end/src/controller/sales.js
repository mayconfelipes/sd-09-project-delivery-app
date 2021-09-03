const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const service = require('../service');
const validateJwt = require('../middlewares/validateJwt');

router.post('/', [
  validateJwt,
  rescue(async (req, res, _next) => {
    const {
      sellerId, totalPrice, deliveryAddress, deliveryNumber, productCart,
    } = req.body;

    const userId = req.user;

    const status = 'Pendente';

    const saleDate = new Date();

    const sale = await service.sales.checkoutNewSale({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
      saleDate,
    }, productCart);

    res.status(201).json(sale);
  }),
]);

router.get('/',
  rescue(async (_req, res, next) => {
    const response =  await service.sales.getSales();
    if (!response) {
      return next({ statusCode: 404, message: 'Sales not found' });
    }
    return res.status(201).json(response);
  }),
);

module.exports = router;
