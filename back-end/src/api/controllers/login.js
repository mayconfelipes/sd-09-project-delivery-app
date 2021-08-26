const express = require('express');
const rescue = require('express-rescue');
const Joi = require('joi');
const generateToken = require('../services/generateToken');
const validate = require('../middlewares/validate');

const route = express.Router();

route.post('/', [
  validate(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  })),
  rescue(async (req, res) => {
    const { email, password } = req.body;
    const { token } = await generateToken({ email, password });
    res.status(200).json({ token });
  }),
]);

module.exports = route;
