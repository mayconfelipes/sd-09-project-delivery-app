const { createHash } = require('crypto');
const { User } = require('../../database/models');

const generateToken = require('../middlewares/generateToken');

const login = async (email, password) => {
  // O projeto pede que a senha esteja criptografada em "MD5", então para buscar o usuario tive que usar o crypto aqui:
  const cryptoPassword = createHash('md5').update(password).digest('hex');

  const foundUserData = await User.findOne({ where: { email, password: cryptoPassword } });
  
  const { password: _, ...userData } = foundUserData.dataValues;

  const token = await generateToken(userData);

  return token;
};

module.exports = { login };
