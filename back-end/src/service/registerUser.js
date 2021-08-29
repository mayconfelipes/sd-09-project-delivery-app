const md5 = require('md5');
const { User } = require('../database/models');

const registerUser = async ({ name, email, password }) => {
  const passwordMd5 = md5(password);

  const user = await User.create({
    name,
    email,
    password: passwordMd5,
    role: 'customer',
  });

  return user;
};

module.exports = {
  registerUser,
};
