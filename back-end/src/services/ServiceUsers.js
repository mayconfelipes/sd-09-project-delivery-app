const md5 = require('md5');
const RepositoryUsers = require('../repositories/RepositoryUsers');
const invalidData = require('../utils/invalidData');
const { createToken } = require('../middlewares');

const login = async ({ email, password }) => {
  const hashPassword = md5(password);

  const findUser = await RepositoryUsers.getByUser({ email, password: hashPassword });

  if (!findUser) {
    throw invalidData('Invalid fields', 400);
  }

  const { password: passBD, ...userWithoutPassword } = findUser.dataValues;

  const token = await createToken(userWithoutPassword);

  return token;
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

module.exports = {
  login,
  register,
};