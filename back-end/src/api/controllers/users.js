const User = require('../services/users');

const loginUser = async (req, res, next) => {
  try {
    const login = req.body;
    const loggedUser = await User.loginUser(login);
    return res.status(200).json(loggedUser);
  } catch (err) { next(err); }
};

const registerUser = async (req, res, next) => {
  try {
    const register = req.body;
    if (!register.role) register.role = 'customer';
    const registeredUser = await User.registerUser(register);
    return res.status(201).json(registeredUser);
  } catch (err) { next(err); }
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.getAllUsers();
    return res.status(200).json(allUsers);
  } catch (err) { next(err); }
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
  getAllUsers,
  getAllSellers,
};
