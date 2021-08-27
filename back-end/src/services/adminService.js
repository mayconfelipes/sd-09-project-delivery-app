const md5 = require('md5');
const { user } = require('../database/models');

const registerUser = async ({ nome, email, password, role }) => {
  const existingUser = await user.findOne({ where: { email } });

  if (existingUser) {
    return ({ error: { statusCode: 409, message: 'Usuário já existente' } });
  }

  const hashedPassword = md5(password);

  const result = await user.create({ name: nome, email, password: hashedPassword, role });

  return { id: result.dataValues.id };
};

module.exports = {
  registerUser,
};
