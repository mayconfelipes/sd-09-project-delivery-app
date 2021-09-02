const jwt = require('jsonwebtoken');

const readSecret = require('./readSecret');

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = async (data) => {
  const secret = await readSecret();

  const token = jwt.sign({ data }, secret, jwtConfig);

  return token;
};

module.exports = generateToken;
