const md5 = require('md5');
const { User } = require('../../../database/models');

const isValidEmail = async (email) => {
  if (email === '') {
    const error = { type: 'BAD_REQUEST', message: '"email" is not allowed to be empty' };
    throw error;
  }

  if (!email) {
    const error = { type: 'BAD_REQUEST', message: '"email" is required' };
    throw error;
  }
  return true;
};

const isValidPassword = (password) => {
  if (password === '') {
    const error = { type: 'BAD_REQUEST', message: '"password" is not allowed to be empty' };
    throw error;
  }

  if (!password) {
    const error = { type: 'BAD_REQUEST', message: '"password" is required' };
    throw error;
  }

  if (password.length < 6) {
    const error = { type: 'BAD_REQUEST', message: '"password" must be greater than 6 ' };
    throw error;
  }
  return true;
};

const isValidUser = async (email, passwd) => {
  const emailExists = await User.findOne({ where: { email } });
  const password = md5(passwd);

  if (!emailExists || password !== emailExists.dataValues.password) {
    const error = { type: 'BAD_REQUEST', message: 'invalid username or password' };
    throw error;
  } 
  return true;
};

const isValidLogin = async (user) => {
  const { email, password } = user;
  isValidEmail(email);
  isValidPassword(password);
  const userData = await isValidUser(email, password);
  
  return userData;
};

module.exports = {
  isValidLogin,
};