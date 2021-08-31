const { createHash } = require('crypto');
const { User } = require('../../database/models');

const generateToken = require('../middlewares/tokenGenerator');
const errorTypes = require('../utils/errorTypes');

const login = async (email, password) => {
  const cryptoPassword = createHash('md5').update(password).digest('hex');

  const foundUserData = await User.findOne({ where: { email, password: cryptoPassword } });

  if (!foundUserData) {
    const error = errorTypes.invalidCredentials;

    return { error };
  }
  
  const { password: _, ...userData } = foundUserData.dataValues;

  const token = await generateToken(userData);

  return { token };
};

module.exports = { login };
