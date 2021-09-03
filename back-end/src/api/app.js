const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  },
});

const userController = require('./controllers/user');
const loginController = require('./controllers/login');
const productController = require('./controllers/product');
const saleController = require('./controllers/sale');
const errorMiddleware = require('./middlewares/Error');

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

io.on('connection', (socket) => {
  socket.emit('helloWorld', `${socket.id} says Hello!`);
});

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/user', userController);
app.use('/login', loginController);
app.use('/product', productController);
app.use('/sale', saleController);

app.use(errorMiddleware);

module.exports = server;
