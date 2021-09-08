const rescue = require('express-rescue');
const Product = require('../services/product');

const create = rescue((req, res) => Product.create(req.body)
  .then((data) => res.status(201).json(data)));

const findAll = rescue((_req, res) => Product.findAll()
  .then((data) => res.status(200).json(data)));

const findOne = rescue((req, res) => Product.findOne(req.params)
  .then((data) => res.status(200).json(data)));

const update = rescue((req, res) => Product.update(req.body, req.params)
  .then((data) => res.status(200).json(data)));

const destroy = rescue(async (req, res) => Product.destroy(req.params)
  .then((data) => res.status(204).json(data)));

module.exports = { create, findAll, findOne, update, destroy };
