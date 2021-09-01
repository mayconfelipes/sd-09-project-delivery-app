const jwt = require('jsonwebtoken');
const boom = require('@hapi/boom');
const rescue = require('express-rescue');
const fs = require('fs');

const jwtValidate = rescue(async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();
  const jwtConfig = {
    expiresIn: '3h',
    algorithm: 'HS256',
  };

  if (!token) {
    throw boom.unauthorized('Token not found');
  }

  const decoded = jwt.verify(token, secret, jwtConfig);
  req.user = decoded;

  if (decoded) {
    next();
  } else {
    throw boom.unauthorized('Expired or invalid token');
  }
});

module.exports = { jwtValidate };
