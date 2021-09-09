const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const app = express();
const httpServer = http.createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const routes = require('./routes');
const middlewares = require('./middlewares');
const sockets = require('./sockets');

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
app.use('/api', routes);
app.use(middlewares.errorTreatment);

sockets.salesIo(io);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = httpServer;
