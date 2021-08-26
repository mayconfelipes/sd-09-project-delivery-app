// const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { users } = require('../../database/models');

const findUser = async (password, email) => {
  const hash = md5(password);
  const user = await users.findOne({
    where: { password: hash, email },
  });
  if (!user) {
    return { hasToken: false };
  }
  return { hasToken: true };
};

module.exports = {
  findUser,
};
