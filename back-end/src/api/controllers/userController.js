const users = require('../services/userService');

const create = async (req, res) => {
  const { name, email, password, role } = req.body;
  const result = await users.create({ name, email, password, role });
  return res.status(201).json(result);
};

const findAll = async (req, res) => {
const { authorization } = req.headers;
  const result = await users.findAll(authorization);
  return res.status(200).json(result);
};

module.exports = {
  create,
  findAll,
};
