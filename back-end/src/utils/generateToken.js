const jwt = require('jsonwebtoken');
const path = require('path');

const SECRET_KEY = require('fs')
  .readFileSync(
    path.join(__dirname, '..', '..', 'jwt.evaluation.key'),
    { encoding: 'utf-8' },
  )
  .trim();

module.exports = (id) => {
  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };

  return jwt.sign({ userId: id }, SECRET_KEY, jwtConfig);
};
