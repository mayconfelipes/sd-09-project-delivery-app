const jwt = require('jsonwebtoken');
const { user } = require('../database/models');

require('dotenv').config();

module.exports = async (receivedToken) => {
  const decode = jwt.verify(receivedToken, process.env.JWT_SECRET);
  const selectUser = await user.findOne({ where: { email: decode.email } });
  const emailNotFound = { status: 409, message: 'email nao exit' };
  if (!selectUser) throw emailNotFound;

  const { password, ...nopass } = selectUser.dataValues;

  return nopass;
};