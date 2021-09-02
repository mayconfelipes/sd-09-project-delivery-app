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

  return res.status(201).json(sale);
}));

router.get('/:id', [
  rescue(async (req, res, next) => {
    const { id } = req.params;
    const sale = service.sales.getByPk(id);
    if (!sale) {
      return next({ statusCode: 404, message: 'sale not found' });
    }
    return res.status(200).json(sale);
  })
]);

module.exports = router;
