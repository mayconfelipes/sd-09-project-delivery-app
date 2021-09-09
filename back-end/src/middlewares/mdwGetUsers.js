const { getUserByRole, getAllUser } = require('../services/getUsers');

const mdwGetUsers = async (req, res, next) => {
    try {
        const { role } = req.params;
        const users = await getUserByRole(role);
        return res.status(200).json(users);
    } catch (error) {
        return next(error);
    }
};

const mdwGetAllUsers = async (_req, res, next) => {
    try {
        console.log('teste');
        const allUsers = await getAllUser();
        return res.status(200).json(allUsers);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    mdwGetUsers,
    mdwGetAllUsers,
};
