const md5 = require('md5');
const RepositoryUsers = require('../repositories/RepositoryUsers');
const invalidData = require('../utils/invalidData');
const { createToken } = require('../middlewares');

const login = async ({ email, password }) => {
  const hashPassword = md5(password);

  const findUser = await RepositoryUsers.getByUser({ email, password: hashPassword });

  if (!findUser) {
    throw invalidData('Usuário não encontrado', 404);
  }

  const { password: passBD, id, ...user } = findUser.dataValues;

  const token = await createToken({ id, user });

  return { user, token };
};

const register = async ({ name, email, password, role }) => {
  const findEmail = await RepositoryUsers.getByEmail({ email });
  const findName = await RepositoryUsers.getByName({ name });

  if (findEmail || findName) {
    throw invalidData('invalid register', 409);
  }

  const hashPassword = md5(password);

  const user = await RepositoryUsers.create({ name, email, password: hashPassword, role });

  const { password: passBD, email: emailBD, ...userWithoutPasswordAndEmail } = user;

  return userWithoutPasswordAndEmail;
};

const getAllUsers = async () => {
  const users = await RepositoryUsers.getAllUsers();

  return users;
};

const getAllSellers = async () => {
  const sellers = await RepositoryUsers.getAllSellers();

  return sellers;
};

module.exports = {
  login,
  register,
  getAllUsers,
  getAllSellers,
};