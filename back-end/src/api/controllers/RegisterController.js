const rescue = require('express-rescue');
const registerService = require('../service/RegisterServices');

const register = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  const role = 'customer';

  const result = await registerService.registerNewUser({ name, email, password, role });

  return res.status(201).json(result);
});

module.exports = { register };
