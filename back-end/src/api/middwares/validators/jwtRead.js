const fs = require('fs');
const path = require('path');

const JWT_FILE = path.join(__dirname, '..', '..', '..', '..', 'jwt.evaluation.key');
const jwtRead = fs.readFileSync(JWT_FILE, 'utf8').trim();

module.exports = {
  jwtRead,
};
