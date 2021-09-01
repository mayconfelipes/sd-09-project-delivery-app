const jwt = require('jsonwebtoken');
const { JWTError } = require('../errors');

const JWT_SECRET = 'juroSolenementeNaoFazerNadaDeBom';

const createJWT = (payload, [timeAmount, timeUnit]) => (
  jwt.sign(payload, JWT_SECRET, { expiresIn: timeAmount + timeUnit })
);

const verifyJWT = (token) => jwt.verify(token, JWT_SECRET, (error, decoded) => {
    if (error) {
      throw new JWTError('Expired or invalid token');
    }

    return decoded;
  });

module.exports = {
  access: {
    name: 'access token',
    expiration: [15, 'm'],
    create(payload) {
      return createJWT(payload, this.expiration);
    },
    verify(token) {
      return verifyJWT(token);
    },
  },
};