const usersServices = require('../services/users');
const { CREATED_STATUS } = require('../middwares/httpStatus');
const { Users } = require('../../database/models');

const create = async (req, res, next) => {
  try {
    const user = req.body;
    const token = await usersServices.create(user);
    res.status(CREATED_STATUS).json({ token });
  } catch (err) {
    next(err);
  }
};

const getAll = async (req, res) => {
  try {
    const exists = await Users.findAll();
    if (!exists) {
      return res
        .status(404)
        .json({ message: 'User does not exist' });
    }
    return res.status(200).json(exists);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getByName = async (req, res) => {
  const { name } = req.params;
  const fullname = name.split('%');
  const nameSearch = fullname.join(' ');
  console.log(nameSearch);
  const exists = await Users.findOne({ where: { name: nameSearch } });
  if (!exists) {
    return res
      .status(404)
      .json({ message: 'User does not exist' });
  }
  return res.status(200).json(exists);
};

module.exports = {
  create,
  getAll,
  getByName,
};