require('dotenv').config();
const md5 = require('md5');
const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

const login = async ({ email, password }) => {
  const passwordMd5 = md5(password);

  const user = await User.findOne({
    where: { email, password: passwordMd5 },
    attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
  });

  if (!user) return { error: 'user_not_found' };

  const token = generateToken(user.id);

  const { id, ...withOutId } = user.dataValues;

  return { ...withOutId, token };
};

module.exports = login;
