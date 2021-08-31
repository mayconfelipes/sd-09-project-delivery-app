const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const http = require('http');

const app = express();
const server = http.createServer(app);

const io = require('socket.io')(server, { cors: { origin: '*' } });
const Middlewares = require('../middlewares');
const routes = require('../routes');

require('../socket')(io);

app.use(bodyParser.json());

app.use(cors());

app.use('/', routes.RouteUser);
app.use('/', routes.RouteProduct);
app.use('/', routes.RouteSale);

app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));

app.use(Middlewares.errorMiddlewares);

module.exports = server;
