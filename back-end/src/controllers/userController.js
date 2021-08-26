const userService = require('../services/userService');

const loginController = async (req, res, next) => {
  const { body: { email, password } } = req;
  const result = await userService.loginService(email, password);
  if (result.error) {
    return next(result.error);
  }
  return res.status(200).json(result);
};

module.exports = {
  loginController,
};
