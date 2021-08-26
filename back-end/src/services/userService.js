require('dotenv').config();
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const { user } = require('../database/models');

const md5Translate = (password) => md5(password);

const generateToken = (userData) => {
  const { password, ...userNecessaryInfos } = userData;
  const jwtConfig = { expiresIn: '1d', algorithm: 'HS256' };
  const secret = fs
    .readFileSync(path.join(`${__dirname}../../../jwt.evaluation.key`), 'utf-8');
  const token = jwt.sign(userNecessaryInfos, secret, jwtConfig);
  return token;
};

const loginService = async (email, password) => {
  const hashedPassword = md5Translate(password);
  const result = await user.findOne({ where: { email, password: hashedPassword } });
  if (!result) {
    return ({ error: { statusCode: 404, message: 'Usuário não encontrado' } });
  }
  const token = generateToken(result.toJSON());
  return ({ token, role: result.role });
};

const registerService = async (newUserData) => {
  const { nome, email, password, role } = newUserData;
  const existingUser = await user.findOne({ where: { email } });

  if (existingUser) {
    return ({ error: { statusCode: 409, message: 'Usuário já existente' } });
  }

  const hashedPassword = md5Translate(password);

  const result = await user.create({ name: nome, email, password: hashedPassword, role });

  return { id: result.dataValues.id };
};

module.exports = {
  loginService,
  registerService,
};
