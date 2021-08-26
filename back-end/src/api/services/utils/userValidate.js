const md5 = require('md5');

const encodePassword = (password) => md5(password);

module.exports = {
  encodePassword,
};
