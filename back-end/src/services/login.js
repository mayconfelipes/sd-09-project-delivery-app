const jwt = require('jsonwebtoken');
const errorObj = require('../utils/errorObj');
const validatorJoi = require('../utils/validatorJoi');

require('dotenv/config');

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const userLogin = async (email, password) => {
  const validData = validatorJoi.verifierSchemaLogin(email, password);
  if (validData.message) return validData;

  const token = jwt.sign({ email, password }, process.env.JWT_SECRET, jwtConfig);
  return token;
};
  
module.exports = {
  userLogin
}