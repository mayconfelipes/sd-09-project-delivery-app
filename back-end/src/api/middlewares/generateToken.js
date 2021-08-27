const jwt = require('jsonwebtoken');
const fs = require('fs').promises;

const readSecret = async () => {
 const secret = await fs.readFile('../back-end/jwt.evaluation.key', 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro: ${err}`);
    process.exit(1);
  } 
  return data;
 });

 return secret;
};

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = async (data) => {
  const secret = await readSecret();

  const token = jwt.sign({ data }, secret, jwtConfig);

  return token;
};

module.exports = generateToken;
