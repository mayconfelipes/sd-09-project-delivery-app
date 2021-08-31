const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

module.exports = (id) => {
  const jwtConfig = {
    expiresIn: '30m',
    algorithm: 'HS256',
  };

  return jwt.sign({ userId: id }, SECRET_KEY, jwtConfig);
};
