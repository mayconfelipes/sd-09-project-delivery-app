require('dotenv').config();

const port = process.env.API_PORT || 3001;
const httpServer = require('./app');

httpServer.listen(port, () => console.log(`Api rodando na porta ${port}`));
