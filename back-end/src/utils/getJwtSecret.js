const { readFileSync } = require('fs');

module.exports = () => {
  const file = readFileSync('./jwt.evaluation.key', 'utf8', (err, data) => {
    if (err) throw err;
    
    return data;
  });
  const secretKey = file.slice(12, (file.length - 2));
  return secretKey;
}