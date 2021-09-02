const jwt = require('jsonwebtoken');

const secret = 'secret';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) return res.status(401).json('token not found');
  jwt.verify(token, secret, (err, decoded) => {
    if (decoded) return next();
    return res.status(401).json(err);
  });
};

module.exports = {
  validateToken
}
