const path = require('path');
const jwt = require('jsonwebtoken');
const SECRET_KEY = require('fs')
.readFileSync(
  path.join(__dirname, '..', '..', 'jwt.evaluation.key'),
  { encoding: 'utf-8' },
).trim();

const { User } = require('../database/models');

module.exports = async (req, _res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return next({ statusCode: 401, message: 'Token not found' });

  const payload = jwt.verify(token, SECRET_KEY);

  const user = await User.findByPk(payload.userId);

  if (!user) return next({ statusCode: 401, message: 'User not found' });

  req.user = user.id;

  return next();
};
