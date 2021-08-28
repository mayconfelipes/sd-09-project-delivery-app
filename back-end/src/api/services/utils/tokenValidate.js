require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Unauthorized } = require('../../utils/httpStatus');

const SECRET = process.env.JWT_SECRET || 'segredo';

const generateToken = (userData) => {
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

  const { id, password, ...payload } = userData;
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

const isValidToken = (authorization) => {
  if (!authorization) {
    const error = { type: Unauthorized, message: 'Token not found' };
    throw error;
  }

  try {
    const userData = jwt.verify(authorization, SECRET);
    return userData;
  } catch (error) {
    const err = { type: Unauthorized, message: 'Expired or invalid token' };
    throw err;
  }
};

module.exports = {
  generateToken,
  isValidToken,
};
