const rescue = require('express-rescue');
const User = require('../services/Users');

const createUser = rescue(async (req, res) => {
  const { body } = req;

  const newUser = await User.createUser({ ...body });

  return res.status(201).json(newUser);
});

const getAll = rescue(async (_req, res) => {
  const getAllUser = await User.getAll();

  return res.status(200).json(getAllUser);
});

const deleteUser = rescue(async (req, res) => {
  const { id } = req.params;

  await User.deleteUser(id);

  return res.status(204).end();
});

const login = rescue(async (req, res) => {
  const { body } = req;

  const loginUser = await User.login(body);

  return res.status(200).json(loginUser);
});

module.exports = {
  createUser,
  getAll,
  deleteUser,
  login,
};
