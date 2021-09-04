import Joi from 'joi';

const MIN_NAME_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6;

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
});

export const registerSchema = Joi.object({
  name: Joi.string().min(MIN_NAME_LENGTH).required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(MIN_PASSWORD_LENGTH).required(),
});

export const validateInfo = ({ info, schema }) => schema.validate(info);
