const crypto = require('crypto');
const { users } = require('../database/models');
const createToken = require('../middlewares/createToken');

const NOTFOUND = { code: 404, message: 'User not found' };

const createUser = async (body) => {
  const { password, role = 'customer', ...allBody } = body;
  const md5Password = crypto.createHash('md5').update(password).digest('hex');
  const { dataValues } = await users.create({ ...allBody, password: md5Password, role });

  const { password: _, ...newUser } = dataValues;

  const token = createToken(newUser);

  const userToken = {
    ...newUser,
    token,
  };
  return userToken;
};

const getAll = async () => {
  const allUser = await users.findAll();

  return allUser;
};

const deleteUser = async (id) => {
  await users.destroy({ where: { id } });
};

const login = async ({ email, password }) => {
  const md5Password = crypto.createHash('md5').update(password).digest('hex');
  const user = await users.findOne({ where: { email, password: md5Password } });

  if (!user) throw NOTFOUND;

  const { password: _, ...loginUser } = user.dataValues;

  const token = createToken(loginUser);

  const userToken = {
    ...loginUser,
    token,
  };

  return userToken;
};

module.exports = {
  createUser,
  getAll,
  deleteUser,
  login,
};
