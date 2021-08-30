const joi = require('joi');
const { users } = require('../../../database/models');

const CONFLICT = { code: 409, message: 'User already registered' };

const userSchema = joi.object().keys({
  name: joi.string().min(12).not().empty()
    .required(),
  email: joi.string().not().empty().email()
    .required(),
  password: joi.string().min(6).not().empty()
    .required(),
  role: joi.string(),
});

const verifyUserAlreadyExists = async (email) => {
  const userAlreadyExists = await users.findOne({ where: { email } });

  return Boolean(userAlreadyExists);
};

const validateUser = async (req, _res, next) => {
  const newUser = req.body;
  
  const { error } = userSchema.validate(newUser);
  
  if (error) return next(error);

  const userAlreadyExists = await verifyUserAlreadyExists(newUser.email);

  if (userAlreadyExists) throw CONFLICT;

  next();
};

module.exports = validateUser;
