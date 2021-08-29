require('dotenv').config();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { SECRET_KEY } = process.env;

const login = async ({ email, password }) => {
  const passwordMd5 = md5(password);

  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };

  const user = await User.findAll({
    where: { email, password: passwordMd5 },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  });

  if (!user.length) return { error: 'user_not_found' };

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, jwtConfig);

  const { id, ...withOutId } = user[0].dataValues;

  return { ...withOutId, token };
};

module.exports = {
  login,
};
