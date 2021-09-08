const usersServices = require('../services/users');
const { CREATED_STATUS, OK_STATUS } = require('../middwares/httpStatus');

const create = async (req, res, next) => {
  try {
    const user = req.body;

    const token = await usersServices.create(user);

    res.status(CREATED_STATUS).json({ token });
  } catch (err) {
    next(err);
  }
};

const getByRole = async (req, res, next) => {
  try {
    const { role } = req.query;

    const users = await usersServices.getByRole(role);

    res.status(OK_STATUS).send(users);
  } catch (err) {
    next(err);
  }
};

const createByAdmin = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = { name, email, password, role };
  try { 
  const addUser = await usersServices.createByAdmin(user);
  res.status(CREATED_STATUS).json(addUser);
} catch (err) {
  next(err);
}
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;

    await usersServices.destroy(id);

    res.status(OK_STATUS).send('User deleted');
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const users = await usersServices.getAll();
    return res.status(OK_STATUS).send(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getByRole,
  createByAdmin,
  destroy,
  getAll,
};
