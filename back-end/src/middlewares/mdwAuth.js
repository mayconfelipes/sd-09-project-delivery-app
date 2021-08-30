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
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
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