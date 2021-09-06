const { verifyToken } = require('../utils/jwtfunctions');

const auth = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = new Error('missing auth token');
    err.status = 401;
    return next(err);
  }
  try {
    const payload = await verifyToken(token);
    req.user = payload;
    return next();
  } catch (err) {
    err.status = 401;
    err.message = 'jwt malformed';
    next(err);
  }
};

module.exports = auth;
