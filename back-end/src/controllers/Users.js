const User = require('../services/Users');

const createUser = async (req, res, next) => {
  const { body } = req;

  const newUser = await User.createUser({ ...body });

  if (newUser.code) return next(newUser);

  return res.status(201).json(newUser);
};

const getAll = async (_req, res) => {
  const getAllUser = await User.getAll();

  return res.status(200).json(getAllUser);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const getUser = await User.getById(id);
  
  if (getUser.code) return next(getUser);

  return res.status(200).json(getUser);
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  const editUser = await User.updateUser(id, { ...body });

  if (editUser.code) return next(editUser);

  return res.status(200).json(editUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await User.deleteUser(id);

  return res.status(204).end();
};

module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
};
