const Joi = require('joi');

const schemaRegister = Joi.object({
  name: Joi
    .string()
    .min(12)
    .not()
    .empty()
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().default('user'),
});

const verifierSchemaRegister = (name, email, password, role) => {
  const { error } = schemaRegister.validate({ name, email, password, role });
  if (error) return error.details[0];
  return {};
};

module.exports = {
  verifierSchemaRegister,
};
