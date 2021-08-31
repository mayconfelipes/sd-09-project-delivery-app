// const jwt = require('jsonwebtoken');
const md5 = require("md5");
const { users } = require("../../database/models");

const findUser = async ({ password, email }) => {
  const hashedPassword = md5(password);
  const user = await users.findOne({
    where: { password: hashedPassword, email }
  });
  if (!user) {
    return false;
  }
  return { email, name: user.dataValues.name, role: user.dataValues.role };
};

const registerUser = async ({ password, email, name, role }) => {
  const hashedPassword = md5(password);
  const userExists = await users.findOne({ where: { email } });
  if (userExists) {
    return false;
  }
  if (!role) {
    role = "customer";
  }
  const response = await users.create({
    password: hashedPassword,
    email,
    name,
    role
  });
  return {
    email,
    name: response.dataValues.name,
    role: response.dataValues.role
  };
};
module.exports = {
  findUser,
  registerUser
};
