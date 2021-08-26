const { User } = require('../database/models');

const getByEmail = async ({ email, password }) => {
  const findEmail = await User.findOne({ where: { email, password } });

  return findEmail;
};

module.exports = {
  getByEmail,
};
