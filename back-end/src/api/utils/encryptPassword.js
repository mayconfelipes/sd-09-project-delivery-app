const { createHash } = require('crypto');

const encryptPassword = (password) => createHash('md5').update(password).digest('hex');

module.exports = encryptPassword;
