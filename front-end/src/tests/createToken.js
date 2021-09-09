import jwt from 'jsonwebtoken';

const jwtKey = 'secret_key';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = jwt.sign(user, jwtKey, jwtConfig);
  return token;
};

export default createToken;
