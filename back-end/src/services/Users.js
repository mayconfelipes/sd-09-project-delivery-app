const { users } = require('../database/models');

const createUser = async (body) => {
  const findUser = await users.findOne({ where: { email: body.email } });

  if (findUser) return { code: 409, message: 'User already registered' };

  const { dataValues } = await users.create({ ...body });

  const { password: _, ...newUser } = dataValues;

  return newUser;
};

const getAll = async () => {
  const allUser = await users.findAll();

  return allUser;
};

const getById = async (id) => {
  const user = await users.findOne({ where: { id } });

  if (!user) return { code: 404, message: 'User does not exist' };

  return user.dataValues;
};

const updateUser = async (id, body) => {
  const user = await users.findOne({ where: { id } });

  if (!user) return { code: 404, message: 'User does not exist' };

  await users.update({ ...body }, { where: { id } });

  const editUser = await users.findOne({ where: { id } });

  return editUser;
};

const deleteUser = async (id) => {
  await users.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
};
