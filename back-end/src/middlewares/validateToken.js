require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = 'secret_key';

module.exports = (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(token);
    if (!token) return next({ error: { statusCode: 401, message: 'Token not found' } });

    const { user } = jwt.verify(token, jwtSecret);
      req.decoded = user;
      req.userId = user.id;
      next();
  } catch (error) {
    return next({
      error: {
        statusCode: 401,
        message: 'Expired or invalid token',
      },
    });
  }
};
