const Joi = require('joi');
const crypto = require('crypto');
const { Op } = require("sequelize");

const { user: User } = require('../models');
const errorHelper = require('../../utils/errorHelper');
const { sign } = require('./jwt/jwt');
const joiValidation = require('../../utils/joiValidation');
const getJwtSecret = require('../../utils/getJwtSecret');

const jwtSecret = getJwtSecret();

const encodedPassword = (password) => {
  return crypto
    .createHmac("md5", jwtSecret)
    .update(password)
    .digest('hex');
};

const login = async (email, password) => {
  try {
    const encryptedPassword = encodedPassword(password);

    const { dataValues: user } = await User.findOne({
      where: { email, password: encryptedPassword }
    });

    const { password: userPassword, ...payload } = user;

    const token = sign(payload);

    return token;
  } catch (_error) {
    throw errorHelper(401, '"Email" or "Password" invalid');
  }
};

const register = async (name, email, password) => {
  joiValidation(
    Joi.object({
      name: Joi.string().min(12).required(),
      email: Joi.string().email({ tlds: false }).min(1).required(),
      password: Joi.string().min(6).required(),
    }),
    { name, email, password },
    409,
  );
  try {
    const encryptedPassword = encodedPassword(password);
    
    const user = await User.findOne({
      where: { [Op.or]: [
        { email },
        { name }
      ]}
    });

    if (user) throw Error;

    const { dataValues: newUser } = await User
      .create({ name, email, password: encryptedPassword, role: 'customer' });

    const { password: userPassword, ...payload } = newUser;

    const token = sign(payload);

    return token;
  } catch (error) {

    throw errorHelper(409, '"Email" or "Name" already used');
  }
};

module.exports = {
  login,
  register,
};
