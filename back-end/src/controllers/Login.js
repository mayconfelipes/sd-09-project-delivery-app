const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const Login = require('../services/Login');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;

  const response = await Login.login(email, password);

  const payload = response;
  const secret = process.env.JWT_SECRET;
  const config = { algorithm: 'HS256' };

  const token = jwt.sign(payload, secret, config);

  return res.status(200).json({ user: { ...response.user, token } });
});

module.exports = {
  login,
};
