const { users } = require("../../database/models");

const findUser = async (password, email) => {
  const user = await users.findOne({
    where: { email, password }
  });
  if (!user) {
    return  { "hasToken": false };
  }
  return  { "hasToken": true } ;
};

module.exports = {
  findUser
};
