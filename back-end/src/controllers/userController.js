const userService = require('../services/userService');
const generateToken = require('../utilidades/generateToken');

const loginController = async (req, res, next) => {
  const { body: { email, password } } = req;
  const result = await userService.loginService(email, password);
  if (result.error) {
    return next(result.error);
  }
  return res.status(200).json(result);
};

const registerController = async (req, res, next) => {
  const { body: { nome, email, password, role } } = req;
  const result = await userService.registerService({ nome, email, password, role });

  if (result.error) {
    return next(result.error);
  }
  const token = generateToken({ id: result.id, nome, email, role });
  return res.status(201).json({ token });
}; 

module.exports = {
  loginController,
  registerController,
};
