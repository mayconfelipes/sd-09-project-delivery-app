const crypto = require('crypto');
const { Op } = require('sequelize');
const { User } = require('../../database/models');
const { newToken } = require('../utils/jwtfunctions');
const newError = require('../utils/newError');

const searchUser = async (email, password) => {
  const foundUser = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });
  if (!foundUser) return false;
  return foundUser.dataValues;
};

const loginUser = async ({ email, password }) => {
  const passwordMD5 = crypto.createHash('md5').update(password).digest('hex');
  const loggedUser = await searchUser(email, passwordMD5);
  if (!loggedUser) throw newError(404, 'Incorrect user or password');
  loggedUser.token = await newToken(loggedUser);
  return loggedUser;
};

const registerUser = async ({ name, email, password, role }) => {
  const checkUser = await User.findOne({
    where: {
      [Op.or]: [
        { email },
        { name },
      ],
    },
  });

  if (checkUser) throw newError(409, 'User already registered');

  const passwordMD5 = crypto.createHash('md5').update(password).digest('hex');
  await User.create({ name, email, password: passwordMD5, role });
  const registeredUser = await searchUser(email, passwordMD5);
  registeredUser.token = await newToken(registeredUser);
  return registeredUser;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers.map((user) => user.dataValues);
};

const getAllSellers = async () => {
  const allSellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password'] },
  });
  return allSellers.map((user) => user.dataValues);
};

module.exports = {
  loginUser,
  registerUser,
  getAllUsers,
  getAllSellers,
};

// =======================================

// const crypto = require('crypto');
// const { User } = require('../../database/models');
// const { newToken } = require('../utils/jwtfunctions');
// const newError = require('../utils/newError');

// const searchUser = async (email, password) => {
//   const foundUser = await User.findOne({
//     where: { email, password },
//     attributes: { exclude: ['password', 'id'] },
//   });
//   if (!foundUser) return false;
//   return foundUser.dataValues;
// };

// const loginUser = async ({ email, password }) => {
//   const passwordMD5 = crypto.createHash('md5').update(password).digest('hex');
//   const loggedUser = await searchUser(email, passwordMD5);
//   if (!loggedUser) throw newError(404, 'User not found');
//   loggedUser.token = await newToken(loggedUser);
//   return loggedUser;
// };

// const registerUser = async ({ name, email, password, role }) => {
//   const checkUser = await User.findOne({ where: { email } });
//   if (checkUser) throw newError(409, 'User already registered');
//   const passwordMD5 = crypto.createHash('md5').update(password).digest('hex');
//   await User.create({ name, email, password: passwordMD5, role });
//   const registeredUser = await searchUser(email, passwordMD5);
//   registeredUser.token = await newToken(registeredUser);
//   return registeredUser;
// };

// const getAllUsers = async () => {
//   const allUsers = await User.findAll();
//   return allUsers.map((user) => user.dataValues);
// };

// module.exports = {
//   loginUser,
//   registerUser,
//   getAllUsers,
// };
