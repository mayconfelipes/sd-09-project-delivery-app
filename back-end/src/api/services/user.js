const md5 = require('md5');
const { User } = require('../../database/models');
const generateToken = require('./generateToken');

const err = (code, message) => ({ code, message });
const userNotFound = '"user" not found';

const create = async ({ name, email, password, role = 'customer' }) => {
  await User.create({ name, email, password: md5(password), role });
  const data = generateToken({ email, password });
  return data;
};

const findAll = async () => {
  const data = await User.findAll();
  return data;
};

const findOne = async ({ id }) => {
  const data = await User.findOne({ where: { id } });
  if (!data) throw err('notFound', userNotFound);
  return data;
};

const update = async (user, { id }) => {
  const data = await User.update(user, { where: { id } });
  if (!data) throw err('notFound', userNotFound);
  return data;
};

const destroy = async ({ id }) => {
  const data = await User.destroy({ where: { id } });
  if (!data) throw err('notFound', userNotFound);
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
