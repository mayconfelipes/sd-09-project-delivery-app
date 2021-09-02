const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const service = require('../service');

router.post('/', rescue(async (req, res, _next) => {
  const { 
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, productCart,
  } = req.body;
  const status = 'Pendente';

  const sale = await service.sales.checkoutNewSale({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
  }, productCart);

  res.status(201).json(sale);
}));

module.exports = router;
