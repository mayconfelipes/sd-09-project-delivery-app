const { User } = require('../../database/models');
const { isValidToken } = require('./utils/tokenValidate');

const create = async (authorization, sale) => {
  isValidToken(authorization);
  const result = await User.create(sale);
  return result;
};

module.exports = {
  create,
};
