const { User } = require('../../database/models');

const create = async (user) => {
  const data = await User.create(user);
  return data;
};

const findAll = async () => {
  const data = await User.findAll();
  return data;
};

const findOne =  async ({ id }) => {
  const data = await User.findOne({ id });
  return data;
};

const update =  async (user, { id }) => {
  const data = await User.update(user, { where: { id } });
  return data;
};

const destroy = async ({ id }) => {
  const data = await User.destroy({ id });
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
