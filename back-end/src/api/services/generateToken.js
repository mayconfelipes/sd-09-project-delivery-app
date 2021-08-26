const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');
const generateError = require('../utils/generateError');

const secret = 'importar_o_ arquivo_jwt.evaluation.key';

const jwtConfig = { expiresIn: '30m', algorithm: 'HS256' };

const generateToken = async ({ email }) => {
  const userDB = await User.findOne({ where: { email } });
  if (!userDB) throw generateError('badRequest', 'invalid "email" or "password"');

  const { dataValues: { password, ...user } } = userDB;
  const token = jwt.sign(user, secret, jwtConfig);
  return { token };
};

module.exports = generateToken;
