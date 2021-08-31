const port = process.env.PORT || 3001;
const http = require('./app');

http.listen(port);
console.log(`Api rodando na porta ${port}`);
