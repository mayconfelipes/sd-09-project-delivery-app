const express = require('express');
const rescue = require('express-rescue');
const User = require('../services/user');

const route = express.Router();

route.post('/', rescue(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
}));

route.get('/', rescue(async (_req, res) => {
  const usersList = await User.findAll();
  res.status(200).json(usersList);
}));

route.get('/:id', rescue(async (req, res) => {
  const user = await User.findOne(req.params);
  res.status(200).json(user);
}));

route.put('/:id', rescue(async (req, res) => {
  const user = await User.update(req.body, req.params);
  res.status(200).json(user);
}));

route.delete('/:id', rescue(async (req, res) => {
  await User.destroy(req.params);
  res.status(204).json();
}));

module.exports = route;
