const express = require('express');
const rescue = require('express-rescue');
const Product = require('../services/product');

const route = express.Router();

route.post('/', rescue(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
}));

route.get('/', rescue(async (_req, res) => {
  const productsList = await Product.findAll();
  res.status(200).json(productsList);
}));

route.get('/:id', rescue(async (req, res) => {
  const product = await Product.findOne(req.params);
  res.status(200).json(product);
}));

route.put('/:id', rescue(async (req, res) => {
  const product = await Product.update(req.body, req.params);
  res.status(200).json(product);
}));

route.delete('/:id', rescue(async (req, res) => {
  await Product.destroy(req.params);
  res.status(204).json();
}));

module.exports = route;
