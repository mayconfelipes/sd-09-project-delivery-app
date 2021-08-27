const md5 = require('md5');
const User = require('../database/models');

const login = async (email, password) => {
  const cryptPassword = md5(password);
  const foundUser = await User.findOne({ where: { email, password: cryptPassword } });

  
};

module.exports = {
  login,
};
