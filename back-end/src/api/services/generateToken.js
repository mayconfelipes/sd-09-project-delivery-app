const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../../database/models');
const error = require('../utils/generateError');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');
const jwtConfig = { expiresIn: '30m', algorithm: 'HS256' };

module.exports = async ({ email }) => {
  const userDB = await User.findOne({ where: { email } });
  if (!userDB) throw error('badRequest', 'Incorrect username or password');

  const { dataValues: { password, ...user } } = userDB;
  const token = jwt.sign(user, secret, jwtConfig);
  return { token };
};
