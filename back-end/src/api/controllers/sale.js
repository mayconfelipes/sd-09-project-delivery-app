const express = require('express');
const rescue = require('express-rescue');
const Sale = require('../services/sale');

const route = express.Router();

route.post('/', rescue(async (req, res) => {
  const sale = await Sale.create(req.body);
  res.status(201).json(sale);
}));

route.get('/', rescue(async (_req, res) => {
  const salesList = await Sale.findAll();
  res.status(200).json(salesList);
}));

route.get('/:id', rescue(async (req, res) => {
  const sale = await Sale.findOne(req.params);
  res.status(200).json(sale);
}));

route.put('/:id', rescue(async (req, res) => {
  const sale = await Sale.update(req.body, req.params);
  res.status(200).json(sale);
}));

route.delete('/:id', rescue(async (req, res) => {
  await Sale.destroy(req.params);
  res.status(204).json();
}));

module.exports = route;
