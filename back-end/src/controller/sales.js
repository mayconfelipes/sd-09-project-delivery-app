const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const { sales } = require('../service');
const validateJwt = require('../middlewares/validateJwt');

router.post('/', [
  validateJwt,
  rescue(async (req, res, _next) => {
    const { 
      sellerId, totalPrice, deliveryAddress, deliveryNumber, productCart,
    } = req.body;

    const userId = req.user;
  
    const status = 'Pending';

    const saleDate = new Date();
  
    const sale = await sales.checkoutNewSale({
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

router.get('/seller', [
  validateJwt,
  rescue(async (req, res, _next) => {
    const id = req.user;

    const saleList = await sales.getSalesBySellerId(id);

    res.status(200).json(saleList);
  }),
]);

router.get('/:id/products', rescue(async (req, res, _next) => {
  const { id } = req.params;

  const productList = await sales.getSaleProducts(id);

  res.status(200).json(productList);
}));

module.exports = router;
