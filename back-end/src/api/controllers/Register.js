const rescue = require('express-rescue');
const registerService = require('../service/Register');

const register = rescue(async (req, res) => {
  const { name, email, password } = req.body;

  const result = await registerService.registerNewUser({ name, email, password });

  return res.status(201).json(result);
});

module.exports = { register };
