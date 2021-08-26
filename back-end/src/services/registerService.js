const md5 = require('md5');
const { user } = require('../database/models');
const jwtCreator = require('./jwtCreator');

const validateEmail = async (email) => {
  const findUser = await user.findOne({ where: { email } });
  const emailAlreadyUsed = { status: 409, message: 'Email already registered' };
  if (findUser) throw emailAlreadyUsed;
};

const createUser = async ({ userName, email, password }) => {
  const encriptedPassword = md5(password);
  const create = await user.create({
    name: userName,
    email,
    password: encriptedPassword,
    role: 'customer',
  });
  return create;
};

const newUser = async (userInfo) => {
  const { userName, email } = userInfo;
  await validateEmail(email);
  await createUser(userInfo);
  const token = jwtCreator({ name: userName, email, role: 'customer' });
  return { name: userName, email, role: 'customer', token };
};

module.exports = {
  newUser,
};
