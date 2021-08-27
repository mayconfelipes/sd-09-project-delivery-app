const error = require('../utils/generateError');

const errorMessage = 'Only admins can register new admins';

module.exports = (req, _res, next) => {
  if (req.user.role !== 'administrator') {
    throw error('unauthorized', errorMessage);
  }
  return next();
};
