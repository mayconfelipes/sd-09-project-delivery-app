const rescue = require('express-rescue');
const loginVerify = require('../service/utils/loginSchema');
const loginService = require('../service/LoginServices');

const login = rescue(async (req, res, next) => {
  const { error } = loginVerify.validate(req.body);

  if (error) {
    return next(error);
  }

  const { token, name, email, role } = await loginService.login({ ...req.body });

  return res.status(200).json({ token, name, email, role });
});

module.exports = { login };
