const MD5 = require("crypto-js/md5");

const md5HashCreate = (password) => {
  return MD5(password).toString();
};

module.exports = { md5HashCreate };
