const jwt = require('jsonwebtoken');
const md5 = require('md5'); 
const fs = require('fs');
const path = require('path');
const { Users } = require('../database/models');
require('dotenv').config();
 
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: 600000,
};

const secret = fs.readFileSync(path.join(__dirname, '../../jwt.evaluation.key'), 'utf8');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exists = await Users.findOne({ where: { email } });
    if (!exists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
      const encPassword = md5(password);
      if (encPassword === exists.password) {
        const token = jwt.sign({ data: exists.displayName }, secret, jwtConfig);
        return res.status(200).json({ message: 'Login successful', token, user: secret });
      }
      return res.status(400).json({ message: 'Wrong Password' });
  } catch (e) {
    return res.status(500).json({ message: 'Internal Error', error: e.message });
  }
};

module.exports = login;
