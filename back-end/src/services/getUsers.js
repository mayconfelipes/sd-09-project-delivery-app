const { users } = require('../database/models');

const getUserByRole = async (role) => {
    const getUsers = await users.findAll({ where: { role } });
    return getUsers;
};

module.exports = {
    getUserByRole,
};
