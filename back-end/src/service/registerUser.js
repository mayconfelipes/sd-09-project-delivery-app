const md5 = require('md5');
const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

const registerUser = async ({ name, email, password: passwordUser }) => {
  const passwordMd5 = md5(passwordUser);

  const user = await User.create({
    name,
    email,
    password: passwordMd5,
    role: 'customer',
  });

  const { id, password, createdAt, updateAt, ...userWithOutPassword } = user.dataValues;

  const token = generateToken(id);

  return { ...userWithOutPassword, token };
};

module.exports = registerUser;
