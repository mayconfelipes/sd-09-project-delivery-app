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
    const { role } = req.params;

    const users = await usersServices.getByRole(role);

    res.status(OK_STATUS).json({ users });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
  getByRole,
};
