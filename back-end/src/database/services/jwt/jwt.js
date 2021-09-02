const jwt = require('jsonwebtoken');
const getJwtSecret = require('../../../utils/getJwtSecret');

const jwtSecret = getJwtSecret();

const sign = (payload) => jwt.sign(payload, jwtSecret);

const verify = (token) => jwt.verify(token, jwtSecret);

module.exports = { sign, verify };