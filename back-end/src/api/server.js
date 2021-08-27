const port = process.env.PORT || 3001;
const app = require('./app');
const { readFile } = require('fs');

const secret = readFile('./jwt.evaluation.txt', (err, data) => {
  if (err) throw err;
  return(data);
});

app.listen(port);
console.log(`Api rodando na porta ${secret}`);
