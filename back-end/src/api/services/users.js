const Joi = require('joi');
const crypto = require('crypto');

const { User } = require('../../database/models');
const { InvalidArgumentError } = require('../errors');
const tokens = require('../tokens');

const ROLE_CHOICES = [
  'customer',
  'seller',
  'admin',
];

const UserSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid(...ROLE_CHOICES).required(),
});

module.exports = {
  async create(payload) {
    const { error } = UserSchema.validate(payload);

    if (error) throw new InvalidArgumentError(error.message);

    const { password } = payload;
    const passwordHash = crypto.createHash('md5').update(password).digest('hex');

    const user = await User.create({ ...payload, password: passwordHash });
    const { password: _, ...userData } = user.dataValues;
    const token = tokens.access.create(userData);

    return { user: { ...userData }, token };
  },
};