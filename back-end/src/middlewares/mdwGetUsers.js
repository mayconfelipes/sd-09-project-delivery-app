const { getUserByRole } = require('../services/getUsers');

const mdwGetUsers = async (req, res, next) => {
    try {
        const { role } = req.params;
        const users = await getUserByRole(role);
        res.status(200).json(users);
    } catch (error) {
        return next(error);
    }
};

module.exports = {
    mdwGetUsers,
};
