const usersServices = require('../services/users');
const { CREATED_STATUS } = require('../middwares/httpStatus');

const create = async (req, res, next) => {
  try {
    const user = req.body;

    const token = await usersServices.create(user);

    res.status(CREATED_STATUS).json({ token });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};