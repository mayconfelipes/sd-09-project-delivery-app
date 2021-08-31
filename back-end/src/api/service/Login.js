const boom = require('@hapi/boom');
const md5 = require('md5');
const { user } = require('../../database/models');

const login = async ({ email, password }) => {
    console.log('xablau');
    const loginUser = await user.findOne({ where: { email } });
     if (!loginUser || loginUser.password !== md5(password)) {
         throw boom.badRequest('Senha invalida');
     }
    return loginUser;
};

module.exports = { login };
