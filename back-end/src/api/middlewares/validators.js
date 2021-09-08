const jwt = require('jsonwebtoken');
const fs = require('fs');
const rescue = require('express-rescue');
const { User } = require('../../database/models');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();
const err = (code, message) => ({ code, message });

const token = rescue((req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) throw err('unauthorized', 'Token not found');
  try {
    const payload = jwt.verify(authorization, secret);
    req.user = payload;
    next();
  } catch (e) {
    throw err('unauthorized', 'Expired or invalid token');
  }
});

const userExists = rescue(async (req, _res, next) => {
  const { email } = req.body;
  const userDB = await User.findOne({ where: { email } });
  if (userDB) throw err('conflict', 'Email already registered');
  next();
});

const admin = rescue((req, _res, next) => {
  if (req.user.role !== 'administrator') {
    throw err('unauthorized', 'Only admins can register new admins');
  }
  next();
});

module.exports = { token, userExists, admin };
