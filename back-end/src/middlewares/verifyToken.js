const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs').promises;

const pathJWT = path.resolve(__dirname, '..', '..', 'jwt.evaluation.key');

const verifyToken = async (token) => {
  try {
    const secret = await (await fs.readFile(pathJWT, 'utf-8')).trim();
    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (error) {
    return {
      message: 'Expired or invalid token',
    };
  }
};

module.exports = verifyToken;
