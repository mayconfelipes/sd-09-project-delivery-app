require('dotenv').config();
const md5 = require('md5');
const { user } = require('../database/models');
const generateToken = require('../utilidades/generateToken');

const md5Translate = (password) => md5(password);

const loginService = async (email, password) => {
  const hashedPassword = md5Translate(password);
  const result = await user.findOne({ where: { email, password: hashedPassword } });
  if (!result) {
    return ({ error: { statusCode: 404, message: 'Usuário não encontrado' } });
  }
  const token = generateToken(result.toJSON());
  return ({ token, id: result.id, name: result.name, email: result.email, role: result.role });
};

const registerService = async (newUserData) => {
  const { nome, email, password, role } = newUserData;
  const existingUser = await user.findOne({ where: { email } });

  if (existingUser) {
    return ({ error: { statusCode: 409, message: 'Usuário já existente' } });
  }

  const hashedPassword = md5Translate(password);

  const result = await user.create({ name: nome, email, password: hashedPassword, role });

  return { id: result.dataValues.id, name: nome, email, role };
};

const getAllUsers = async () => {
  const userList = await user.findAll({ attributes: { exclude: ['password'] } });

  return userList;
};

const removeUserById = async (userId) => {
  await user.destroy({ where: { id: userId } });
};

module.exports = {
  loginService,
  registerService,
  getAllUsers,
  removeUserById,
};
