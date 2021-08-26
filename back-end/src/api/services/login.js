const Joi = require('joi');
const crypto = require('crypto');
const tokens = require('../tokens');

const { User } = require('../../database/models');
const { InvalidArgumentError, NotFoundError } = require('../errors');

const LoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

module.exports = async (payload) => {
  const { error } = LoginSchema.validate(payload);

  if (error) throw InvalidArgumentError(error.message);

  const { email } = payload;
  const password = crypto.createHash('md5').update(payload.password).digest('hex');
  const user = await User.findOne({ where: { email, password } });
  if (!user) throw new NotFoundError('User');

  const { password: _, ...userData } = user.dataValues;
  const token = tokens.access.create(userData);
  return { token };
};