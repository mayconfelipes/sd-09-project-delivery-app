const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { Users } = require('../../database/models');
const { messageError } = require('../middwares/errors');
const {
  INTERNAL_ERROR_STATUS,
  CONFLICT_STATUS,
  NOT_FOUND_STATUS } = require('../middwares/httpStatus');

const {
  NAME_REGISTERED,
  EMAIL_REGISTERED,
  USER_NOT_CREATED,
  USER_NOT_EXIST } = require('../middwares/errorMessages');

const findByName = async (name) => Users.findOne({ where: { name } });

const findByEmail = async (email) => Users.findOne({ where: { email } });

const nameExists = async (name) => {
  const result = await findByName(name);

  if (result) {
    throw messageError(CONFLICT_STATUS, NAME_REGISTERED);
  }
};

const emailExists = async (email) => {
  const result = await findByEmail(email);

  if (result) {
    throw messageError(CONFLICT_STATUS, EMAIL_REGISTERED);
  }
};

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: 600000,
};

const secret = 'secret_key';

const create = async (user) => {
  const { name, email, password, role } = user;

  await nameExists(name);
  await emailExists(email);

  const md5Password = crypto.createHash('md5').update(password).digest('hex').toString();

  const newUser = Users.create({ 
    name,
    email,
    password: md5Password,
    role,
  });

  if (!newUser) {
    throw messageError(INTERNAL_ERROR_STATUS, USER_NOT_CREATED);
  }

  return jwt.sign({ data: { name, email, role } }, secret, jwtConfig);
};

const getById = async (id) => {
  const user = await Users.findByPk(id);

  if (!user) {
    throw messageError(NOT_FOUND_STATUS, USER_NOT_EXIST);
  }

  return user;
};

const getByName = async (name) => {
  const user = await Users.findOne({ where: { name } });

  if (!user) {
    throw messageError(NOT_FOUND_STATUS, USER_NOT_EXIST);
  }

  return user;
};

module.exports = {
  create,
  getById,
  getByName,
};