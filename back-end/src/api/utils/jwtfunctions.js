const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;
require('dotenv').config();

const config = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secretPath = path.resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key');

const newToken = async (payload) => {
  const secret = await fs.readFile(secretPath, 'utf-8');
  return jwt.sign(payload, secret, config);
};

const verifyToken = async (token) => {
  const secret = await fs.readFile(secretPath, 'utf-8');
  return jwt.verify(token, secret);
};

module.exports = {
  newToken,
  verifyToken,
};
