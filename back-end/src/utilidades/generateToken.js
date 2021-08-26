const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
// require('dotenv').config();
// const secret = process.env.SECRET_KEY;

const generateToken = (userData) => {
  const { password, ...userNecessaryInfos } = userData;
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  // se for usar da variavel de ambiente tirar as duas linhas abaixo
  const secret = fs
    .readFileSync(path.join(`${__dirname}../../../jwt.evaluation.key`), 'utf-8');
  const token = jwt.sign({ userData: userNecessaryInfos }, secret, jwtConfig);
  return token;
};

module.exports = generateToken;
