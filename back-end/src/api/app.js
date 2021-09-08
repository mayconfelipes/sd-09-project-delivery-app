const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: { origin: 'http://localhost:3000', methods: ['GET', 'POST', 'PUT', 'DELETE'] },
});

const login = require('./routes/login');
const user = require('./routes/user');
const product = require('./routes/product');
const sale = require('./routes/sale');
const errorMiddleware = require('./middlewares/Error');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

io.on('connection', (socket) => {
  socket.emit('helloWorld', `${socket.id} says Hello!`);
  socket.on('status', ({ id, status }) => io.emit('status', { id, status }));
});

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', login);
app.use('/user', user);
app.use('/product', product);
app.use('/sale', sale);

app.use(errorMiddleware);

module.exports = server;
