// const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { users } = require('../../database/models');

const findUser = async ({ password, email }) => {
  const hashedPassword = md5(password);
  console.log('antes do acesso ao banco');
  const user = await users.findOne({
    where: { password: hashedPassword, email },
  });
  if (!user) {
    return { hasToken: false };
  }
  return { hasToken: true };
};

// const registerUser = async ({password, email, name}) => {
//   password = md5(password);
//   const userExists = await users.findOne({where: {email}});
//   if (userExists) {
//     return { alreadyExists: true}
//   }
//   const response = await users.create({password, email, name, role: 'cliente'})
//   console.log(response, 'resposta do create');
//   return { alreadyExists: false}
// }

module.exports = {
  findUser,
  // registerUser
};
