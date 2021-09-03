const userService = require('../service/userService');
const registerService = require('../service/RegisterServices');

const listUsers = async (_req, res, next) => {
  try {
    const users = await userService.listUsers();
    return res.status(200).json(users);
  } catch (e) {
    next(e);
  }
};

const listUsersBRole = async (req, res, next) => {
  try {
    const { role } = req.params;
    const usersByRole = await userService.listUsersByRole(role);
    return res.status(200).json(usersByRole);
  } catch (e) {
    next(e);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const result = await registerService.registerNewUser({ name, email, password, role });
    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    await userService.deleteUser(id);
    return res.status(200).json({ message: 'ok' });
  } catch (e) {
    next(e);
  }
};

module.exports = { listUsers, listUsersBRole, createUser, deleteUser };
