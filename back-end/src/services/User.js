const md5 = require('md5');
const { User } = require('../database/models');

const login = async (email, password) => {
  const cryptPassword = md5(password);
  const foundUser = await User.findOne({ where: { email, password: cryptPassword } });

  if (!foundUser) {
    return {
      status: 'error',
      data: {
        message: 'Usuário ou senha inválidos',
        status: 'invalid_data',
      },
    };
  }

  return {
    status: 'success',
    data: {
      message: ''
    }
  };
};

module.exports = {
  login,
};
