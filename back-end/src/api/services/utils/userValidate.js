const { BadRequest } = require('../../utils/httpStatus');
const isValidEmail = require('./emailValidate');
const isValidPassword = require('./passwordValidate');

const validRoles = {
  administrator: 'administrator',
  seller: 'seller',
  costumer: 'costumer',
};

const isValidName = (name) => {
  if (name === '') {
    const error = { type: BadRequest, message: '"name" is not allowed to be empty' };
    throw error;
  }

  if (!name) {
    const error = { type: BadRequest, message: '"name" is required' };
    throw error;
  }

  if (name.length < 3) {
    const error = { 
      type: BadRequest,
      message: '"Name" length must be at least 3 characters long',
    };
    throw error;
  }
  return true;
};

const isValidRole = (role) => {
  if (role === '') {
    const error = { type: BadRequest, message: '"role" is not allowed to be empty' };
    throw error;
  }

  if (!role) {
    const error = { type: BadRequest, message: '"name" is required' };
    throw error;
  }

  if (!validRoles[role]) {
    const error = { type: BadRequest, message: 'invalid role' };
    throw error;
  }
  return true;
};

const isValidUserFields = (fields) => {
  isValidName(fields.name);
  isValidEmail(fields.email);
  isValidPassword(fields.password);
  isValidRole(fields.role);
};

module.exports = {
  isValidUserFields,
};
