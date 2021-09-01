const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const md5 = require('md5');
const { user } = require('../../database/models');

const createToken = (email) => {
  const secret = fs
    .readFileSync('jwt.evaluation.key', { encoding: 'utf-8' })
    .trim();

  const token = jwt.sign(email, secret);

  return token;
};

const login = async ({ email, password }) => {
  const loginUser = await user.findOne({ where: { email } });

  if (!loginUser || loginUser.password !== md5(password)) {
    throw boom.notFound('Invalid data');
  }

  const token = createToken(email);

  return { token, ...loginUser.dataValues };
};

module.exports = { login, createToken };
