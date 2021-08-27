require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

const generateToken = (userData) => {
  const { password, ...userNecessaryInfos } = userData;
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  const token = jwt.sign({ userData: userNecessaryInfos }, secret, jwtConfig);
  return token;
};

module.exports = generateToken;
