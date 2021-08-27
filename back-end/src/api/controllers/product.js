const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const Product = require('../services/product');
const validate = require('../middlewares/validate');
// const validateToken = require('../middlewares/validateToken');

const route = express.Router();

const productValidator = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  urlImage: Joi.string(),
});

route.post('/', [
  validate(productValidator),
  rescue(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  }),
]);

route.get('/', [
  rescue(async (_req, res) => {
    const productsList = await Product.findAll();
    res.status(200).json(productsList);
  }),
]);

// route.use(validateToken);

route.get('/:id', [
  rescue(async (req, res) => {
    const product = await Product.findOne(req.params);
    res.status(200).json(product);
  }),
]);

route.put('/:id', [
  validate(productValidator),
  rescue(async (req, res) => {
    const product = await Product.update(req.body, req.params);
    res.status(200).json(product);
  }),
]);

route.delete('/:id', [
  rescue(async (req, res) => {
    await Product.destroy(req.params);
    res.status(204).json();
  }),
]);

module.exports = route;
