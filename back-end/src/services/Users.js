const { Users } = require('../database/models');

const createUser = async (body) => {
  const findUser = await Users.findOne({ where: { email: body.email } });

  if (findUser) return { code: 409, message: 'User already registered' };

  const { dataValues } = await Users.create({ ...body });

  const { password: _, ...newUser } = dataValues;

  return newUser;
};

const getAll = async () => {
  const allUser = await Users.findAll();

  return allUser;
};

const getById = async (id) => {
  const user = await Users.findOne({ where: { id } });

  if (!user) return { code: 404, message: 'User does not exist' };

  return user.dataValues;
};

const updateUser = async (id, body) => {
  const editUser = await Users.findOne({ where: { id } });

  if (!editUser) return { code: 404, message: 'User does not exist' };

  await Users.update({ ...body }, { where: { id } });

  return editUser;
};

const deleteUser = async (id) => {
  await Users.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAll,
  getById,
  updateUser,
  deleteUser,
};
