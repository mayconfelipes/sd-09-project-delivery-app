const express = require('express');
const generateToken = require('../services/generateToken');

const route = express.Router();

route.post('/', async (req, res) => {
  const { email, password } = req.body;
  const { token } = await generateToken({ email, password });
  res.status(200).json({ token });
});

module.exports = route;
