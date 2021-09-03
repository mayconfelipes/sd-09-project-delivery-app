const jwt = require('jsonwebtoken');
const { messageError } = require('../errors');
const { TOKEN_INVALID, TOKEN_NOT_FOUND, USER_NOT_EXIST } = require('../errorMessages');
const { UNAUTHORIZED_STATUS, NOT_FOUND_STATUS } = require('../httpStatus');
const { Users } = require('../../../database/models');

require('dotenv').config();

const JWT_SECRET = 'secret_key';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    throw messageError(UNAUTHORIZED_STATUS, TOKEN_NOT_FOUND);
  }

  try {
    const payload = await jwt.verify(token, JWT_SECRET);
    const user = await Users.findOne({ where: { email: payload.data.email } });
    if (!user) {
      throw messageError(NOT_FOUND_STATUS, USER_NOT_EXIST);
    }
    req.user = user;
    next();
  } catch (err) {
    next(messageError(UNAUTHORIZED_STATUS, TOKEN_INVALID));
  }
};

module.exports = { validateToken };