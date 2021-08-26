const { User } = require('../../database/models');
const { isValidToken } = require('./utils/tokenValidate');

const findAll = async (authorization) => {
  isValidToken(authorization);
  const result = await User.findAll(
    { attributes: { exclude: ['password'] } },
  );
  return result;
};

module.exports = {
  findAll,
};
