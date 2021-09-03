const invalidData = require('../utils/invalidData');
const verifyToken = require('./verifyToken');

const UNAUTHORIZED = 401;

const validJWT = async (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) throw invalidData('Token not found', UNAUTHORIZED);
    const validVerifyToken = await verifyToken(token);
    
    if (validVerifyToken.message) throw invalidData(validVerifyToken.message, UNAUTHORIZED);
  
    const { id, user } = validVerifyToken;
    const { email, role, name } = user;
  
    req.user = {
      id,
      role,
      email,
      name,
    };
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = validJWT;