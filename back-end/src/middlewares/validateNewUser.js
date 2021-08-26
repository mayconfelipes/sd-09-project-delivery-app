const joi = require('joi');

const verifyLoginInfos = (newUserData) => (
  joi.object({
    nome: joi.string().min(12).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
  }).validate(newUserData)
);

module.exports = (req, _res, next) => {
  const { body: { nome, email, password } } = req;
  const { error } = verifyLoginInfos({ nome, email, password });
  if (error) {
    return next(error);
  }
  return next();
};
