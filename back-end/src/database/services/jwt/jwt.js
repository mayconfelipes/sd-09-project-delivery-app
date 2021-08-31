const jwt = require('jsonwebtoken');
const getJwtSecret = require('../../../utils/getJwtSecret');

const jwtSecret = getJwtSecret();

const sign = (payload) => jwt.sign(payload, jwtSecret, { expiresIn: 86400 });

const verify = (token) => jwt.verify(token, jwtSecret);

module.exports = { sign, verify };