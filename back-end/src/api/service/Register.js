const boom = require('@hapi/boom');
const md5 = require('md5');

const registerVerify = require('./utils/registerSchema');
const { user } = require('../../database/models');

const validateParams = (name, email, password) => {
  const { error } = registerVerify.validate({ name, email, password });
  if (error) throw error;
};

const findUserExists = async (email) => {
  const userExists = await user.findOne({ where: { email } });
  if (userExists) throw boom.conflict('Email already registered');
};

const registerNewUser = async (payload) => {
  const { name, email } = payload;
  let { password } = payload;
  validateParams(name, email, password);
  
  await findUserExists(email);

  password = md5(password);

  const result = await user.create({ name, email, password, role: 'customer' });

  return { name: result.name, email: result.email, role: result.role };
};

module.exports = {
  registerNewUser,
};
