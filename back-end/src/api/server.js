const port = process.env.PORT || 3001;
const httpServer = require('./app');

httpServer.listen(port);
console.log(`Api rodando na porta ${port}`);
