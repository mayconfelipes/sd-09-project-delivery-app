const { readFileSync } = require('fs');

module.exports = () => {
  const file = readFileSync('./jwt.evaluation.key', 'utf8', (err, data) => {
    if (err) throw err;
    
    return data;
  });
  return file;
};