const jwt = require('jsonwebtoken');
const rescue = require('express-rescue');
const User = require('../services/User');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;

  const response = await User.login(email, password);

  const payload = response;
  const secret = 'secret_key';

  const config = { algorithm: 'HS256', expiresIn: '30m' };

  const token = jwt.sign(payload, secret, config);

  return res.status(200).json({ user: { ...response.user, token } });
});

const register = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;

  const response = await User.register({ name, email, password, role });

  return res.status(201).json(response);
});

const getAllUsers = rescue(async (_req, res) => {
  const response = await User.getAllUsers();
  return res.status(200).json(response);
});

const getByRole = rescue(async (req, res) => {
  const { params: { role } } = req;
  const sellers = await User.getByRole(role);
  return res.status(200).json(sellers);
});

const findUserById = rescue(async (req, res) => {
  const { id } = req.body;
  const user = await User.findById(id);
  return res.status(201).json(user);
});

module.exports = {
  login,
  register,
  getAllUsers,
  getByRole,
  findUserById,
};
