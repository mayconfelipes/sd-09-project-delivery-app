const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const httpServer = http.createServer(app);

app.use(cors());

// const io = require('socket.io')(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST'],
//   },
// });

app.get('/', () => console.log('hello world!'));

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
