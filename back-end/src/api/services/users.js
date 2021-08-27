const crypto = require('crypto');
const { User } = require('../../database/models');
const { newToken } = require('../utils/jwtfunctions');
const newError = require('../utils/newError');

const loginUser = async ({ email, password }) => {
  const passwordMD5 = crypto.createHash('md5').update(password).digest('hex');
  const { dataValues: loggedUser } = await User.findOne(
    { where: { email, password: passwordMD5 },
    attributes: { exclude: ['password', 'id'] } },
  );
  if (!loggedUser) throw newError(404, 'User not found');
  loggedUser.token = await newToken(loggedUser);
  return loggedUser;
};

const registerUser = async ({ name, email, password, role }) => {
  const checkUser = await User.findOne({ where: { email } });
  if (checkUser) throw newError(409, 'User already registered');
  const passwordMD5 = crypto.createHash('md5').update(password).digest('hex');
  await User.create({ name, email, password: passwordMD5, role });
  const { dataValues: registeredUser } = await User.findOne(
    { where: { email, password: passwordMD5 },
    attributes: { exclude: ['password', 'id'] } },
  );
  registeredUser.token = await newToken(registeredUser);
  return registeredUser;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.dataValues);
};

module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
};
