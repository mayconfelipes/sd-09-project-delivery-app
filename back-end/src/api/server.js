const httpServer = require('./app');

const port = process.env.PORT || 3001;
httpServer.listen(port, () => console.log(`Api rodando na porta ${port}`));