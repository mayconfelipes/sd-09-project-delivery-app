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
      return next(errorObj('Invalid fields', notFound));
    }
    const objToReturnForResponseOk = {
      id: userIsValid.id,
      name: userIsValid.name,
      email: userIsValid.email,
      role: userIsValid.role,
      token: LoginService.userLogin(email, password),
    };
    return res.status(OK).json(objToReturnForResponseOk);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  userLogin,
};
