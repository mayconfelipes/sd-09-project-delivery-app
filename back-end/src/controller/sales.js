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

router.get('/:id', [
  rescue(async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const sale = await service.sales.getSale(id);
    if (!sale) {
      return next({ statusCode: 404, message: 'sale not found' });
    }
    return res.status(200).json(sale);
  }),
]);

router.get('/', [
  validateJwt,
  rescue(async (req, res, next) => {
    const userId = req.user;
    const response = await service.sales.getSales(userId);
    if (!response.length) {
      return next({ statusCode: 404, message: 'Sales not found' });
    }
    return res.status(200).json(response);
  }),
]);

router.put('/:id', rescue(async (req, res, _next) => {
  const { id } = req.params;
  const { newStatus } = req.body;
  await service.sales.statusUpdate(id, newStatus);
  return res.status(200).json({ message: 'status updated' });
}));

module.exports = router;
