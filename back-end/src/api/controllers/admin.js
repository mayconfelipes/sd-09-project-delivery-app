const jwt = require('jsonwebtoken');
const { join } = require('path');
const jwtKey = require('fs')
.readFileSync(join(__dirname, '..', '..', '..', 'jwt.evaluation.key'), {
  encoding: 'utf-8',
})
.trim();
const adminService = require('../services/admin');

const tokenConfig = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ email }, jwtKey, jwtConfig);
  return token;
};

const verifyAdmin = (adminToken) => jwt.verify(adminToken, jwtKey);

const registerUser = async (req, res) => {
  const adminToken = req.headers.authorization;
  const { data } = verifyAdmin(adminToken);
  const { password, name, email, role } = req.body;
  if (data.email === 'adm@deliveryapp.com') {
    const response = await adminService.registerUser({
      password, name, email, role,
    });
    const token = tokenConfig(email);
    if (!response) {
      return res.status(409).send({ alreadyExists: true });
    }
    return res
      .status(201)
      .send({
        user: { token, email, name: response.name, role: response.role },
      });
  }
};

module.exports = {
  registerUser,
};
