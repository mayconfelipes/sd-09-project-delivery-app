const rescue = require('express-rescue');
const User = require('../services/user');
const generateToken = require('../services/generateToken');

const register = rescue((req, res) => User.create(req.body)
  .then((data) => res.status(201).json(data)));

const login = rescue((req, res) => generateToken(req.body)
  .then((data) => res.status(200).json(data)));

const create = rescue((req, res) => User.create(req.body)
  .then((data) => res.status(201).json(data)));

const findAll = rescue((_req, res) => User.findAll()
  .then((data) => res.status(200).json(data)));

const findOne = rescue((req, res) => User.findOne(req.params)
  .then((data) => res.status(200).json(data)));

const update = rescue((req, res) => User.update(req.body, req.params)
  .then((data) => res.status(200).json(data)));

const destroy = rescue((req, res) => User.destroy(req.params)
  .then((data) => res.status(200).json(data)));

module.exports = { register, login, findAll, create, findOne, update, destroy };
