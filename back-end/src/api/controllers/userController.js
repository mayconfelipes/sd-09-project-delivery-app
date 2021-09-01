const users = require('../services/userService');

const create = async (req, res) => {
  const { name, email, password, role } = req.body;
  const result = await users.create({ name, email, password, role });
  return res.status(201).json(result);
};

module.exports = {
  create,
};
