const { User } = require('../../database/models');

const generateToken = require('../middlewares/tokenGenerator');
const encryptPassword = require('../middlewares/encryptPassword');
const errorTypes = require('../utils/errorTypes');

const login = async (email, password) => {
  const cryptoPassword = encryptPassword(password);

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
