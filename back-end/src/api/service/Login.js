const boom = require('@hapi/boom');
const md5 = require('md5');
const { user } = require('../../database/models');

const login = async ({ email, password }) => {
    console.log(email, password);
    const loginUser = await user.findOne({ where: { email } });
    console.log(md5(password));
     if (!loginUser || loginUser.password !== md5(password)) {
         throw boom.notFound('Invalid data');
     }
    return loginUser;
};

module.exports = { login };