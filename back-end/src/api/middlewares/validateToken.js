const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', 'utf8');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
