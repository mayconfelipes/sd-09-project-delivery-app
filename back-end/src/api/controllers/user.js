const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const User = require('../services/user');
const validate = require('../middlewares/validate');
// const validateToken = require('../middlewares/validateToken');
const validateAdmin = require('../middlewares/validateAdmin');

const route = express.Router();

const userValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

route.post('/', [
  validate(userValidator),
  rescue(async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
  }),
]);

route.post('/seller', [
  validate(userValidator),
  rescue(async (req, res) => {
    const user = await User.create(req.body, 'seller');
    res.status(201).json(user);
  }),
]);

route.get('/', [
  rescue(async (_req, res) => {
    const usersList = await User.findAll();
    res.status(200).json(usersList);
  }),
]);

// route.use(validateToken);

route.post('/admin', [
  validate(userValidator),
  validateAdmin,
  rescue(async (req, res) => {
    const user = await User.create(req.body, 'administrator');
    res.status(201).json(user);
  }),
]);

route.get('/role', [
  rescue(async (req, res) => {
    const usersList = await User.findByRole(req.body);
    res.status(200).json(usersList);
  }),
]);

route.get('/:id', [
  rescue(async (req, res) => {
    const user = await User.findOne(req.params);
    res.status(200).json(user);
  }),
]);

route.put('/:id', [
  validate(userValidator),
  rescue(async (req, res) => {
    const user = await User.update(req.body, req.params);
    res.status(200).json(user);
  }),
]);

route.delete('/:id', [
  rescue(async (req, res) => {
    await User.destroy(req.params);
    res.status(204).json();
  }),
]);

module.exports = route;
