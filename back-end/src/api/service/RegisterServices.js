const boom = require('@hapi/boom');
const md5 = require('md5');
const { createToken } = require('./LoginServices');

const registerVerify = require('./utils/registerSchema');
const { user } = require('../../database/models');

const validateParams = (name, email, password) => {
  const { error } = registerVerify.validate({ name, email, password });
  if (error) throw error;
};

const findUserExists = async (email, name) => {
  const userExists = await user.findAll({ where: [{ email, name }] });
  if (userExists.length > 0) throw boom.conflict('User already registered');
};

const registerNewUser = async (payload) => {
  const { name, email, role } = payload;
  let { password } = payload;
  validateParams(name, email, password);

  await findUserExists(email, name);

  password = md5(password);

  const result = await user.create({ name, email, password, role });

  const token = createToken(email);

  return { token, name: result.name, email: result.email, role: result.role };
};

module.exports = {
  registerNewUser,
};
