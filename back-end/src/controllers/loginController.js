const jwt = require('jsonwebtoken');
const md5 = require('md5');
const { Users } = require('../database/models');
const { jwtRead } = require('../api/middwares/validators/jwtRead');
require('dotenv').config();
 
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: 600000,
};

const payload = (user) => {
  const { id, name, email, role } = user;
  return ({ id, name, email, role });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exists = await Users.findOne({ where: { email } });
    if (!exists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
      const encPassword = md5(password);
      if (encPassword === exists.password) {
        const token = jwt.sign({ data: payload(exists) }, jwtRead, jwtConfig);

        const { name, role } = exists;
        return res.status(200).json({ name, email, role, token });
      }
      return res.status(400).json({ message: 'Wrong Password' });
  } catch (e) {
    return res.status(500).json({ message: 'Internal Error', error: e.message });
  }
};

module.exports = login;
