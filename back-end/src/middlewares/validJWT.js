const invalidData = require('../utils/invalidData');
const verifyToken = require('./verifyToken');

const UNAUTHORIZED = 401;

const validJWT = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) throw invalidData('Token not found', UNAUTHORIZED);

  const validVerifyToken = await verifyToken(token);

  if (validVerifyToken.message) throw invalidData(validVerifyToken.message, UNAUTHORIZED);

  const { userId, user } = validVerifyToken;
  const { email, role, name } = user;

  req.user = {
    userId,
    role,
    email,
    name,
  };
  next();
};

module.exports = validJWT;