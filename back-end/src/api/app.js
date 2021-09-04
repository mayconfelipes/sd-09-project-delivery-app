require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const app = express();
app.use(bodyParser.json());
// app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

const httpServer = http.createServer(app);

const io = require('socket.io')(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST', 'PUT'],
  },
});

const controllers = require('../controller');
const middlewares = require('../middlewares');

require('../sockets/sale')(io);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', controllers.login);
app.use('/products', controllers.products);
app.use('/register', controllers.registerUser);
app.use('/sales', controllers.sales);
app.use('/seller', controllers.seller);

app.use(middlewares.error);

module.exports = httpServer;
