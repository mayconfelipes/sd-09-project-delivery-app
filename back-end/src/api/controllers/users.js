const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const secret = process.env.JWT_SECRET || 'secret';

const tokenConfig = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return token;
};

const findUser = async (req, res) => {
  const { password, email } = req.body;
  const response = await userService.findUser({ password, email });
  const token = tokenConfig(email);
  if (!response) {
    return res.status(404).send({ hasToken: false });
  }
  return res.status(200).send({ user: { token, email, name: response.name, role: response.role } });
  // ponto de atencao para o token, talvez deixe de passar o requisito 4
};

const registerUser = async (req, res) => {
  const { password, name, email } = req.body;
  const response = await userService.registerUser({ password, name, email });
  const token = tokenConfig(email);
  if (!response) {
    return res.status(409).send({ alreadyExists: true });
  }
  // return res.status(201).send({ user: {name, email, token, role: 'customer' }});
  return res.status(201).send({ user: { token, email, name: response.name, role: response.role } });
};

module.exports = {
  findUser,
  registerUser,
};
