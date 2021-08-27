require('dotenv').config();
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

// const secret = process.env.SECRET_KEY;
const secret = fs
  .readFileSync(path.join(`${__dirname}../../../jwt.evaluation.key`), { encoding: 'utf-8' }).trim();
const generateToken = (userData) => {
  const { password, ...userNecessaryInfos } = userData;
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  const token = jwt.sign({ userData: userNecessaryInfos }, secret, jwtConfig);
  return token;
};

module.exports = generateToken;
