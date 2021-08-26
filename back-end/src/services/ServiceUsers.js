const RepositoryUsers = require('../repositories/RepositoryUsers');
const invalidData = require('../utils/invalidData');
const { createToken } = require('../middlewares');

const login = async ({ email, password }) => {
  const findUser = await RepositoryUsers.getByEmail({ email, password });

  if (!findUser) {
    throw invalidData('Invalid fields', 400);
  }

  const { password: passBD, ...userWithoutPassword } = findUser.dataValues;
  
  const token = await createToken(userWithoutPassword);

  return token;
};

module.exports = {
  login,
};