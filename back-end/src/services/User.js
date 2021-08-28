const md5 = require('md5');
const Joi = require('joi');

const { User } = require('../database/models');
const { removePassword, generateError } = require('../../schemas');

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const RegisterSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const findByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });

  return user;
};

const login = async (email, password) => {
  const { error } = LoginSchema.validate({ email, password });

  if (error) throw generateError(422, error.message);

  const cryptPassword = md5(password);
  const user = await findByEmail(email);

  if (!user || user.dataValues.password !== cryptPassword) {
    throw generateError(404, 'Email not registered or invalid password.');
  }

  const userWithoutPassword = removePassword(user.dataValues);

  return {
    user: userWithoutPassword,
  };
};

const register = async (name, email, password) => {
  const { error } = RegisterSchema.validate({ name, email, password });

  if (error) throw generateError(422, error.message);

  const existentUser = await findByEmail(email);

  if (existentUser) throw generateError(409, 'Email already registered.');

  const cryptPassword = md5(password);
  const user = await User.create({ name, email, password: cryptPassword, role: 'user' });
  const userWithoutPassword = removePassword(user.dataValues);

  return {
    user: userWithoutPassword,
  };
};

module.exports = {
  login,
  register,
};
