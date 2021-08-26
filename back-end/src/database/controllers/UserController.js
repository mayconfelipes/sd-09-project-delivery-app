const rescue = require('express-rescue');
const User = require('../services/UserService');

const login = rescue(async(req, res) => {
  const [email, password] = req.headers.authorization.split(' ');
  const token = await User.login(email, password);

  return res.status(200).json({ token });
});

module.exports = {
  login,
};
