const registerService = require('../services/register');
const errorObj = require('../utils/errorObj');
const statusCode = require('../utils/statusCode');
const LoginService = require('../services/login');
const { users } = require('../database/models');

const verifyRegisteredUser = async (req, _res, next) => {
  try {
    const { name, email } = req.body;
    const data = await registerService.findOneUser(name, email);
    if (data) throw errorObj('User already registered', statusCode.conflict);
    next();
  } catch (error) {
    next(error);
  }
};

const registerUserInDB = async (req, _res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const data = await registerService.saveOneUser(name, email, password, role);
    if (data.message) throw errorObj(data.message, statusCode.badRequest);
    next();
  } catch (error) {
    next(error);
  }
};

const generateTokenRegister = async (req, res, next) => {
  try {
    const { email } = req.body;
    const { name, password, role } = await users.findOne({ where: { email } });
    const objToReturnWithUserInfos = {
      name,
      email,
      role,
      token: LoginService.userLogin(email, password),
    };
    return res.status(201).json(objToReturnWithUserInfos);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyRegisteredUser,
  registerUserInDB,
  generateTokenRegister,
};