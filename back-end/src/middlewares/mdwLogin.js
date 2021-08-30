const LoginService = require('../services/login');
const {
  statusCode: { OK, notFound },
  hashMd5,
  errorObj,
} = require('../utils');
const { users } = require('../database/models');

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userIsValid = await users.findOne({ where: { email } });
    const md5Hash = hashMd5(password);
    if (!userIsValid || userIsValid.password !== md5Hash) {
      const invalidFields = errorObj('Invalid fields', notFound);
      return next(invalidFields);
    }
    const getToken = LoginService.userLogin(email, password);

    const objToReturnForResponseOk = {
      name: userIsValid.name,
      email: userIsValid.email,
      role: userIsValid.role,
      token: getToken,
    }
    return res.status(OK).json(objToReturnForResponseOk);
  } catch (err) {
    // const internalError = errorObj(err.message, badRequest);
    return next(err);
  }
};

module.exports = {
  userLogin,
};
