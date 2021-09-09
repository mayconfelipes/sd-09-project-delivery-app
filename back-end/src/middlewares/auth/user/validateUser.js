const { users } = require('../../../database/models');

const CONFLICT = { code: 409, message: 'User already registered' };

const verifyUserAlreadyExists = async (email) => {
  const userAlreadyExists = await users.findOne({ where: { email } });

  return Boolean(userAlreadyExists);
};

const validateUser = async (req, _res, next) => {
  const newUser = req.body;

  const userAlreadyExists = await verifyUserAlreadyExists(newUser.email);

  if (userAlreadyExists) throw CONFLICT;

  next();
};

module.exports = validateUser;
