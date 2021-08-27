const Joi = require('joi');
const invalidData = require('../utils/invalidData');

const BAD_REQUEST = 400;
const NAME_LENGTH_MIN = 12;
const PASS_LENGTH_MIN = 6;

const validRegisterAdmin = (req, _res, next) => {
  const { error } = Joi.object({
    name: Joi.string().not().empty().min(NAME_LENGTH_MIN),
    email: Joi.string().email().not().empty()
    .required(),
    password: Joi.string().min(PASS_LENGTH_MIN),
    role: Joi.string().not().empty(),
  }).validate(req.body);

  if (error) return next(invalidData(error.message, BAD_REQUEST));

  next();
};

module.exports = validRegisterAdmin;