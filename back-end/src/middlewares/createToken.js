const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;

const pathJWT = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = async (userData) => {
  console.log(userData);
  const secret = await fs.readFile(pathJWT, 'utf-8');
  const token = jwt.sign(userData, secret, jwtConfig);

  return token;
};

module.exports = createToken;