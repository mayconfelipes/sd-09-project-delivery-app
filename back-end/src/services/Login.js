const md5 = require('md5');
const Joi = require('joi');

const { User } = require('../database/models');
const { removePassword, generateError } = require('../../schemas');

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const login = async (email, password) => {
  const { error } = LoginSchema.validate({ email, password });

  if (error) throw generateError(422, error.message);

  const cryptPassword = md5(password);
  const user = await User.findOne({ where: { email } });

  if (!user || user.dataValues.password !== cryptPassword) {
    throw generateError(404, 'Email not registered or invalid password.');
  }

  const userWithoutPassword = removePassword(user.dataValues);

  return {
    user: userWithoutPassword,
  };
};

module.exports = {
  login,
};
