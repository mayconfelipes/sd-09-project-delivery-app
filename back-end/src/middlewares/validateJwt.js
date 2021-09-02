const jwt = require('jsonwebtoken');
const path = require('path');
const { User } = require('../database/models');

const SECRET_KEY = require('fs')
.readFileSync(
  path.join(__dirname, '..', '..', 'jwt.evaluation.key'),
  { encoding: 'utf-8' },
)
.trim();

module.exports = async (req, _res, next) => {
  const { token } = req.headers;

  if (!token) return next({ statusCode: 401, message: 'Token not found' });

  const payload = jwt.verify(token, SECRET_KEY);

  console.log(payload);

  const user = await User.findByPk(payload.userId);

  if (!user) return next({ statusCode: 401, message: 'User not found' });

  req.user = user.id;

  return next();
};
