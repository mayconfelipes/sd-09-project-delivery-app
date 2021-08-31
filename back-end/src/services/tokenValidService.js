const jwt = require('jsonwebtoken');
const fs = require('fs');
const { user } = require('../database/models');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

require('dotenv').config();

module.exports = async (receivedToken) => {
  const decode = jwt.verify(receivedToken, secret);
  const selectUser = await user.findOne({ where: { email: decode.email } });
  const emailNotFound = { status: 401, message: 'Expired or invalid token' };
  if (!selectUser) throw emailNotFound;

  const { password, ...nopass } = selectUser.dataValues;

  return nopass;
};