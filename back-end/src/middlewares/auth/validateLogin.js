const joi = require('joi');

const userSchema = joi.object().keys({
  email: joi.string().not().empty().email()
    .required(),
  password: joi.string().min(6).not().empty()
    .required(),
});

const validateLogin = async (req, _res, next) => {
  const user = req.body;

  const { error } = userSchema.validate(user);

  if (error) return next(error);

  next();
};

module.exports = validateLogin;
