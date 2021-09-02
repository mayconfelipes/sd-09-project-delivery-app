const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const Sale = require('../services/sale');
const validate = require('../middlewares/validate');
const validateToken = require('../middlewares/validateToken');

const route = express.Router();

const saleValidator = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  saleDate: Joi.date(),
  status: Joi.string(),
  cart: Joi.array().required(),
});

route.get('/', [
  rescue(async (_req, res) => {
    const salesList = await Sale.findAll();
    res.status(200).json(salesList);
  }),
]);

route.use(validateToken);

route.post('/', [
  validate(saleValidator),
  rescue(async (req, res) => {
    const sale = await Sale.create(req.body);
    res.status(201).json(sale);
  }),
]);

route.get('/:id', [
  rescue(async (req, res) => {
    const sale = await Sale.findOne(req.params);
    res.status(200).json(sale);
  }),
]);

route.put('/:id', [
  validate(saleValidator),
  rescue(async (req, res) => {
    const sale = await Sale.update(req.body, req.params);
    res.status(200).json(sale);
  }),
]);

route.delete('/:id', [
  rescue(async (req, res) => {
    await Sale.destroy(req.params);
    res.status(204).json();
  }),
]);

route.get('/seller/:id', [
  rescue(async (req, res) => {
    const sales = await Sale.findBySeller(req.params);
    res.status(200).json(sales);
  }),
]);

module.exports = route;
