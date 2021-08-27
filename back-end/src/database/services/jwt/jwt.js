const jwt = require('jsonwebtoken');
require('dotenv').config();

const sign = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 });

const verify = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { sign, verify };