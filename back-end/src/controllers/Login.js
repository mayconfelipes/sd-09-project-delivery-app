const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const Login = require('../services/Login');

const login = rescue(async (req, res, next) => {
  const { email, password } = req.body;

  const response = await Login.login(email, password);

  if (response.error) {
    return next({
      error: {
        status: 404,
        message: 'Usuário ou senha inválidos.',
      },
    });
  }

  const payload = response;
  const secret = process.env.JWT_SECRET;
  const config = { algorithm: 'HS256' };

  const token = jwt.sign(payload, secret, config);

  return res.status(200).json({ user: { ...response.user, token } });
});

module.exports = {
  login,
};
