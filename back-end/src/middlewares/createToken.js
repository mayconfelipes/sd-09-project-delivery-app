const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;

const pathJWT = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = async (userData) => {
  const secret = await (await fs.readFile(pathJWT, 'utf-8')).trim();
  const token = jwt.sign(userData, secret, jwtConfig);

  return token;
};

module.exports = createToken;
