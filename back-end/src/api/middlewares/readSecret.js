const fs = require('fs').promises;
const path = require('path');

const readSecret = async () => {
  const secret = await fs.readFile(
    path.join(__dirname, '..', '..', '..', 'jwt.evaluation.key'),
    'utf8',
    (err, data) => {
      if (err) {
        console.error(`Erro: ${err}`);

        process.exit(1);
      }
      return data;
    },
  );

  return secret;
};

module.exports = readSecret;
