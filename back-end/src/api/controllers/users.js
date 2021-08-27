const usersServices = require('../services/users');
const { CREATED_STATUS } = require('../middwares/httpStatus');

const create = async (req, res, next) => {
  try {
    const user = req.body;

    await usersServices.create(user);

    res.status(CREATED_STATUS).send();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};