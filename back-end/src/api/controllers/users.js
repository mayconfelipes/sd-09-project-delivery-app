const User = require('../services/users');

const loginUser = async (req, res, next) => {
  try {
    const login = req.body;
    const loggedUser = await User.loginUser(login);
    req.user = loggedUser;
    return res.status(200).json(loggedUser);
  } catch (error) {
    return next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const register = req.body;
    if (!register.role) register.role = 'customer';
    const registeredUser = await User.registerUser(register);
    req.user = registeredUser;
    return res.status(201).json(registeredUser);
  } catch (error) {
    return next(error);
  }
};

const registerUserByAdmin = async (req, res, next) => {
  try {
    const register = req.body;
    const { role } = req.user;
    if (role === 'administrator') {
      const registeredUser = await User.registerUser(register);
      return res.status(201).json(registeredUser);
    }
  } catch (error) {
    return next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (error) {
    return next(error);
  }
};

const getAllSellers = async (req, res, next) => {
  try {
    const allSellers = await User.getAllSellers();
    return res.status(200).json(allSellers);
  } catch (err) { next(err); }
};

module.exports = {
  loginUser,
  registerUser,
  registerUserByAdmin,
  getAllUsers,
  getAllSellers,
};
