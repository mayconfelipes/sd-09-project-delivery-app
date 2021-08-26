const { User } = require('../models');
const errorHelper = require('../../utils/errorHelper');
const { sign } = require('./jwt/jwt');

const login = async (email, password) => {
  try {
    const { dataValues: user } = await User.findOne({ where: { email, password } });

    const { password: userPassword, ...payload } = user;

    const token = sign(payload);

    return token;
  } catch (error) {
    throw errorHelper(401, '"Email" or "Password" invalid');
  }
};

module.exports = {
  login,
};