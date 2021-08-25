require('dotenv').config();

const port = process.env.PORT || 3001;
const app = require('./app');

// VQV

app.listen(port);
console.log(`Api rodando na porta ${port}`);
