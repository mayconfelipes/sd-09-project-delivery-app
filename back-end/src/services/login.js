require('dotenv/config');

const jwt = require('jsonwebtoken');
const validatorJoi = require('../utils/validatorJoi');

const jwtConfig = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const userLogin = (email, password) => {
  const validData = validatorJoi.verifierSchemaLogin(email, password);
  const teste = process.env.JWT_SECRET || 'secret_key';
  if (validData.message) return validData;

  const token = jwt.sign({ email, password }, teste, jwtConfig);
  return token;
};
  
module.exports = {
  userLogin,
};