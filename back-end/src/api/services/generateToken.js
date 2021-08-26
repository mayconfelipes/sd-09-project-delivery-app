const jwt = require('jsonwebtoken');
const { User } = require('../../database/models');

const secret = 'importar_o_ arquivo_jwt.evaluation.key';

const jwtConfig = { expiresIn: '15m', algorithm: 'HS256' };

const generateToken = async ({ email }) => {
  const { dataValues: { password, ...user } } = await User.findOne({ where: { email } });
  const token = jwt.sign(user, secret, jwtConfig);
  return { token };
};

module.exports = generateToken;
