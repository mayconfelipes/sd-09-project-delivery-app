const { users } = require("../../database/models");
const jwt = require("jsonwebtoken");
const md5 = require("md5");


const findUser = async (password, email) => {
  password = md5(password);
  const user = await users.findOne({
    where: { password, email }
  });
  if (!user) {
    return { hasToken: false };
  }
  return { hasToken: true };
};

module.exports = {
  findUser
};
