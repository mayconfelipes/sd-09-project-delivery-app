const md5 = require('md5');
const { user } = require('../database/models');
const jwtCreator = require('./jwtCreator');

const findUser = async (email) => {
  const selectUser = await user.findOne({ where: { email } });
  const emailNotFound = { status: 404, message: 'Not found' };
  if (!selectUser) throw emailNotFound;

  return selectUser;
};

const login = async ({ email, password }) => {
  const selectUser = await findUser(email);
  const { password: bdPass, role, name } = selectUser;
  const encriptedPassword = md5(password);

  const passwordNotFound = { status: 404, message: 'Not found' };
  if (bdPass !== encriptedPassword) throw passwordNotFound;

  const token = jwtCreator({ name, email, role });
  return { userId: selectUser.id, name, email, role, token };
};

module.exports = {
  login,
};
