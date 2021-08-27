const rescue = require('express-rescue');

const User = require('../services/User');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;

  const response = await User.login(email, password);

  if (response.status === 'error') {
    return res.status(404).json(response.data);
  }

  return res.status(200).json(response.data);
});

module.exports = {
  login,
};
