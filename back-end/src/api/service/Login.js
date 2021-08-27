// const boom = require('@hapi/boom');
const { User } = require('../../database/models');

const login = async ({ email, passord }) => {
     const loginUser = await User.findAll();
    // // if (!loginUser || loginUser.passord !== passord) {
    // //     throw boom.badRequest('campos invalidos');
    // // }
     return loginUser;
};

module.exports = { login };