const rescue = require('express-rescue');
const registerService = require('../service/RegisterServices');

const register = rescue(async (req, res) => {
  const { name, email, password } = req.body;

  const result = await registerService.registerNewUser({ name, email, password });

  return res.status(201).json(result);
});

module.exports = { register };
