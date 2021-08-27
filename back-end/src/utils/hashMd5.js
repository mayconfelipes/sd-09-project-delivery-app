const cryptoMD5 = require('crypto-js/md5');

const md5HashCreate = (password) => cryptoMD5(password).toString();

module.exports = md5HashCreate;
