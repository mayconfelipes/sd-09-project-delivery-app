const md5 = require('md5');
const { users } = require('../../database/models');

const registerUser = async ({ password, email, name, role }) => {
  const hashedPassword = md5(password);
  const emailExiste = await users.findOne({ where: { email } });
  const nameExiste = await users.findOne({ where: { name } });

  if (emailExiste || nameExiste) {
    return false;
  }
  const response = await users.create({
    password: hashedPassword,
    email,
    name,
    role,
  });
  return {
    email,
    name: response.dataValues.name,
    role: response.dataValues.role,
  };
};

module.exports = {
  registerUser,
};
