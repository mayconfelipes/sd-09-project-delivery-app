const { users } = require("../models");

const findUser = async (data) => {
  const { email, password } = data;
  const user = await users.findOne({
    where: { email, password },
  });
  return user
};

module.exports = {
  findUser,
};
