const jwt = require('jsonwebtoken');
const { messageError } = require('../errors');
const { TOKEN_INVALID, TOKEN_NOT_FOUND } = require('../errorMessages');
const { UNAUTHORIZED_STATUS } = require('../httpStatus');
const { jwtRead } = require('./jwtRead');

require('dotenv').config();

const validateToken = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;

    try {
      if (!token) {
        throw messageError(UNAUTHORIZED_STATUS, TOKEN_NOT_FOUND);
      }
    } catch (err) {
      return next(err);
    }
    
    const secret = await jwtRead();

    const payload = jwt.verify(token, secret);

    req.login = payload;
    next();
  } catch (err) {
    next(messageError(UNAUTHORIZED_STATUS, TOKEN_INVALID));
  }
};

module.exports = { validateToken };