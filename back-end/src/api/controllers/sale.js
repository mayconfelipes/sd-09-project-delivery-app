const rescue = require('express-rescue');
const Sale = require('../services/sale');

const create = rescue((req, res) => Sale.create(req.body)
  .then((data) => res.status(201).json(data)));

const findAll = rescue((_req, res) => Sale.findAll()
  .then((data) => res.status(200).json(data)));

const findOne = rescue((req, res) => Sale.findOne(req.params)
  .then((data) => res.status(200).json(data)));

const update = rescue((req, res) => Sale.update(req.body, req.params)
  .then((data) => res.status(200).json(data)));

const destroy = rescue((req, res) => Sale.destroy(req.params)
  .then((data) => res.status(204).json(data)));

module.exports = { create, findAll, findOne, update, destroy };
