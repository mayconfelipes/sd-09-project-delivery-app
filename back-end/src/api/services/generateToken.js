const jwt = require('jsonwebtoken');
const fs = require('fs');
const md5 = require('md5');
const { User } = require('../../database/models');
const error = require('../utils/generateError');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');
const jwtConfig = { expiresIn: '30m', algorithm: 'HS256' };

module.exports = async ({ email, password }) => {
  const userDB = await User.findOne({ where: { email, password: md5(password) } });
  if (!userDB) throw error('notFound', 'Incorrect username or password');

  const { dataValues: { password: _, ...user } } = userDB;
  const token = jwt.sign(user, secret, jwtConfig);
  return { token };
};
