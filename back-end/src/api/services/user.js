const { User } = require('../../database/models');
const error = require('../utils/generateError');

const userNotFound = '"user" not found';
const emailRegistered = 'Email already registered';

const create = async ({ name, email, password }, role = 'customer') => {
  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw error('conflict', emailRegistered);
  const data = await User.create({ name, email, password, role });
  return data;
};

const findAll = async () => {
  const data = await User.findAll();
  return data;
};

const findOne = async ({ id }) => {
  const data = await User.findOne({ where: { id } });
  if (!data) throw error('notFound', userNotFound);
  return data;
};

const update = async (user, { id }) => {
  const data = await User.update(user, { where: { id } });
  if (!data) throw error('notFound', userNotFound);
  return data;
};

const destroy = async ({ id }) => {
  const data = await User.destroy({ where: { id } });
  if (!data) throw error('notFound', userNotFound);
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
