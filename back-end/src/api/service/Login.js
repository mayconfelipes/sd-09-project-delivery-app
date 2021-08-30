const boom = require('@hapi/boom');
const md5 = require('md5');
const { User } = require('../../database/models');

const login = async ({ email, password }) => {
    console.log(email, password);
    const loginUser = await User.findOne({ where: { email } });
    console.log(md5(password));
     if (!loginUser || loginUser.password !== md5(password)) {
         throw boom.badRequest('Senha invalida');
     }
    return loginUser;
};

module.exports = { login };