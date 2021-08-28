const md5 = require('md5');
const { User } = require('../database/models');

const { removePassword } = require('../../schemas');

const login = async (email, password) => {
  const cryptPassword = md5(password);
  const user = await User.findOne({ where: { email, password: cryptPassword } });

  if (!user) {
    return {
      error: {
        message: 'Usuário ou senha inválidos',
        status: 'invalid_data',
      },
    };
  }

  const userWithoutPassword = removePassword(user.dataValues);

  return {
    user: userWithoutPassword,
  };
};

module.exports = {
  login,
};
