const { users } = require('../database/models');

const getUserByRole = async (role) => {
    const getUsers = await users.findAll({ where: { role } });
    return getUsers;
};

const getAllUser = async () => {
    const allUsers = await users.findAll();
    console.log(allUsers);
    return allUsers;
};

module.exports = {
    getUserByRole,
    getAllUser,
};
