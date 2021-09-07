require('dotenv/config');
const jwt = require('jsonwebtoken');

const statusCode = require('../utils/statusCode');

const isValidToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res
    .status(statusCode.unauthorized)
    .json({ message: 'Token not found' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'secret_key';
    const decoded = jwt.verify(token, secret);
    req.email = decoded.email;
    next();
  } catch (err) {
    return res
    .status(statusCode.unauthorized)
    .json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
    isValidToken,
}; 