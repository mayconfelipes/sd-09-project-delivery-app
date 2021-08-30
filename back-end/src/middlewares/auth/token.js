const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
  .trim();
const { users } = require('../../database/models');
require('dotenv').config();

const authToken = async (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({ code: 401, message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, jwtKey);

    const user = await users.findOne({ where: { email: decoded.email } });

    if (!user) {
      return next({ code: 401, message: 'Erro ao procurar usuário do token.' });
    }

    const { _id, password, ...userWithOutPasswor } = decoded;

    req.user = { id: _id, ...userWithOutPasswor };

    next();
  } catch (err) {
    return next({ code: 401, message: 'Expired or invalid token' });
  }
};

module.exports = authToken;
