const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { users } = require('../database/models');

const NOTFOUND = { code: 404, message: 'User not found' };

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const secret = 'teste';

const createUser = async (body) => {
  const { password, role = 'customer', ...allBody } = body;
  const md5Password = crypto.createHash('md5').update(password).digest('hex');
  const { dataValues } = await users.create({ ...allBody, password: md5Password, role });

  const { password: _, ...newUser } = dataValues;

  return newUser;
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

  const token = jwt.sign(loginUser, secret, jwtConfig);

  return token;
};

module.exports = {
  createUser,
  getAll,
  deleteUser,
  login,
};
