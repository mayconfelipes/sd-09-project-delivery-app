const { User } = require('../../database/models');

const encryptPassword = require('../middlewares/encryptPassword');
const errorTypes = require('../utils/errorTypes');

const register = async (name, email, password, role = 'customer') => {
  const cryptoPassword = encryptPassword(password);

  const foundUserData = await User.findOne({ where: { name, email } });

  if (foundUserData) {
    const error = errorTypes.registerConflict;

    return { error };
  }
  
  const createdUser = await User.create({ name, email, password: cryptoPassword, role });

  return { createdUser };
};

module.exports = { register };
