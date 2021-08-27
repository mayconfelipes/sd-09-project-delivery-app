const md5 = require('md5');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
  const passwordMd5 = md5(password);

  const user = await User.findAll({
    where: { email, password: passwordMd5 },
    attributes: { exclude: ['password'] },
  });

  return user;
};

module.exports = {
  login,
};
