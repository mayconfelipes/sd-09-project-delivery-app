const registerService = require('../services/register');
const errorObj = require('../utils/errorObj');
const statusCode = require('../utils/statusCode');

const verifyRegisteredUser = async (req, _res, next) => {
  try {
    const { email } = req.body;
    const data = await registerService.findOneUser(email);
    if (data) throw errorObj('User already registered', statusCode.conflict);
    next()
  } catch (error) {
    next(error);
  }
};

const registerUserInDB = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    const data = await registerService.saveOneUser(name, email, password, role);
    if (data.message) throw errorObj(data.message, statusCode.badRequest);
    res.status(statusCode.OK).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyRegisteredUser,
  registerUserInDB,
};