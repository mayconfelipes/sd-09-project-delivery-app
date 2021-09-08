const fs = require('fs');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();
const jwtConfig = { expiresIn: '30m', algorithm: 'HS256' };
const err = (code, message) => ({ code, message });

const generateToken = async ({ email, password }) => {
  const userDB = await User.findOne({ where: { email, password: md5(password) } });
  if (!userDB) throw err('notFound', 'Incorrect username or password');

  const { dataValues: { password: _, ...user } } = userDB;
  const token = jwt.sign(user, secret, jwtConfig);
  return { ...user, token };
};

module.exports = generateToken;
