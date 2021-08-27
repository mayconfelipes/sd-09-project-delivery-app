require('dotenv').config();
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');

// const secret = process.env.SECRET_KEY; // passar para variavel de ambiente
const secret = fs
  .readFileSync(path.join(`${__dirname}../../../jwt.evaluation.key`), { encoding: 'utf-8' }).trim();

const validateJWT = (req, res, next) => {
  const { headers: { authorization } } = req;
  if (!authorization) {
    return res.status(401).json({
      error: { message: 'Token not found' },
    });
  }
  try {
    const payload = jwt.verify(authorization, secret);
    if (!payload) {
      return res.status(401).json({
        error: { message: 'Expired or invalid token' },
      });
    }
    req.payload = payload;
    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = validateJWT;
