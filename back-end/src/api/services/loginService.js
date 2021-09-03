const { User } = require('../../database/models');

const generateToken = require('../middlewares/tokenGenerator');
const encryptPassword = require('../middlewares/encryptPassword');
const errorTypes = require('../utils/errorTypes');

const login = async (userEmail, password) => {
  const cryptoPassword = encryptPassword(password);

  const foundUserData = await User.findOne({
    where: { email: userEmail, password: cryptoPassword },
  });

  if (!foundUserData) {
    const error = errorTypes.invalidCredentials;

    return { error };
  }
  
  const { password: _, name, email, role } = foundUserData.dataValues;

  const token = await generateToken({ name, email, role });

  return { token, name, email, role };
};

module.exports = { login };
