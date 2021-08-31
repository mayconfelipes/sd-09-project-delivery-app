const rescue = require('express-rescue');
const User = require('../services/UserService');

const login = rescue(async(req, res) => {
  const { email, password } = req.body;

  const user = await User.login(email, password);

  return res.status(200).json(user);
}); 

const register = rescue(async(req, res) => {
  const { name, email, password } = req.body;
  console.log('oi');
  const token = await User.register(name, email, password);

  return res.status(201).json({ token });
});

module.exports = {
  login,
  register,
};
