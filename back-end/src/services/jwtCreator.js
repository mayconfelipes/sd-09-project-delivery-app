require('dotenv').config();
const fs = require('fs');
const jwt = require('jsonwebtoken');

const jwtCreator = ({ name, email, role }) => {
  const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ name, email, role }, secret, jwtConfig);
  return token;
};

module.exports = jwtCreator;