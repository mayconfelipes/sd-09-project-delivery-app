const Joi = require('joi');

const validateRegister = (req, _res, next) => {
  const { name, email, password } = req.body;

  const userSchema = Joi.object({
    name: Joi.string().min(12).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const userValidation = userSchema.validate({ name, email, password }); 

  if (userValidation.error) {
    return next(userValidation.error);
  }

  return next();
};

module.exports = validateRegister;
