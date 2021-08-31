const ServiceUsers = require('../services/ServiceUsers');
const invalidData = require('../utils/invalidData');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await ServiceUsers.login({ email, password });

    return res.status(200).json({ ...user, token });
  } catch (error) {
    return next(error);
  }
};

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const role = 'customer';
    const user = await ServiceUsers.register({ name, email, password, role });

    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
};

const registerAdmin = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (req.user.role !== 'administrator') throw invalidData('invalid register', 409);
    const user = await ServiceUsers.register({ name, email, password, role });

    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await ServiceUsers.getAllUsers();

    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const getAllSellers = async (req, res, next) => {
  try {
    const sellers = await ServiceUsers.getAllSellers();

    return res.status(200).json(sellers);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  login,
  register,
  registerAdmin,
  getAllUsers,
  getAllSellers,
};
