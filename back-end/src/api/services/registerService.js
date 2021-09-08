const { User } = require('../../database/models');

const encryptPassword = require('../utils/encryptPassword');
const errorTypes = require('../utils/errorTypes');
const filterUserData = require('../utils/filterUserData');
const generateToken = require('../utils/tokenGenerator');

const register = async (name, email, password, role = 'customer') => {
  const cryptoPassword = encryptPassword(password);

  const foundUserData = await User.findOne({ where: { name, email } });

  if (foundUserData) {
    const error = errorTypes.registerConflict;

    return { error };
  }
  
  const filteredUserData = await filterUserData(
    async () => User.create({ name, email, password: cryptoPassword, role }),
  );
  
  const token = await generateToken(filteredUserData);

  return { token };
};

module.exports = { register };
