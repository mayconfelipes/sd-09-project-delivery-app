const fs = require('fs').promises;
const path = require('path');
const { JWT_NOT_FOUND } = require('../errorMessages');
const { messageError } = require('../errors');
const { NOT_FOUND_STATUS } = require('../httpStatus');

const JWT_FILE = 'jwt.evaluation.key';

const jwtRead = () => {
  const secret = fs.readFile(path.resolve(JWT_FILE), 'utf-8')
    .then((data) => data)
    .catch(() => {
      throw messageError(NOT_FOUND_STATUS, JWT_NOT_FOUND);
  });

  return secret;
};

module.exports = {
  jwtRead,
};