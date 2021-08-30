const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const generateToken = require('../services/generateToken');
const validate = require('../middlewares/validate');

const route = express.Router();

const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

route.post('/', [
  validate(loginValidator),
  rescue(async (req, res) => {
    const data = await generateToken(req.body);
    res.status(200).json(data);
  }),
]);

module.exports = route;
