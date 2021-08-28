const md5 = require('md5');
const { User } = require('../../database/models');
const { isValidToken, generateToken } = require('./utils/tokenValidate');
const { isValidUserFields } = require('./utils/userValidate');

const create = async (user) => {
  await isValidUserFields(user);
  const hashPassword = md5(user.password);
  const newUser = { ...user, password: hashPassword };
  
  const userData = await User.create(newUser);
  const token = generateToken(userData.dataValues);
  const result = { token };
  return result;
};

const findAll = async (authorization) => {
  isValidToken(authorization);
  const result = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return result;
};

module.exports = {
  create,
  findAll,
};
