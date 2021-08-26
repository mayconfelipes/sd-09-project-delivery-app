const { User } = require('../../database/models');
const generateError = require('../utils/generateError');

const notFoundMessage = '"user" not found';

const create = async ({ role = 'customer', ...user }) => {
  const data = await User.create({ ...user, role });
  return data;
};

const findAll = async () => {
  const data = await User.findAll();
  return data;
};

const findOne = async ({ id }) => {
  const data = await User.findOne({ where: { id } });
  if (!data) throw generateError('notFound', notFoundMessage);
  return data;
};

const update = async (user, { id }) => {
  const data = await User.update(user, { where: { id } });
  if (!data) throw generateError('notFound', notFoundMessage);
  return data;
};

const destroy = async ({ id }) => {
  const data = await User.destroy({ where: { id } });
  if (!data) throw generateError('notFound', notFoundMessage);
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
