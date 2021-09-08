const { User } = require('../../database/models');

const generateToken = require('../utils/tokenGenerator');
const encryptPassword = require('../utils/encryptPassword');
const errorTypes = require('../utils/errorTypes');
const filterUserData = require('../utils/filterUserData');

const login = async (userEmail, password) => {
  const cryptoPassword = encryptPassword(password);

  const foundUserData = await User.findOne({
    where: { email: userEmail, password: cryptoPassword },
  });

  if (!foundUserData) {
    const error = errorTypes.invalidCredentials;

    return { error };
  }

  const filteredUserData = await filterUserData(foundUserData);

  const token = await generateToken(filteredUserData);

  return { token };
};

module.exports = { login };
