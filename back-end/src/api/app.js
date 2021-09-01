const http = require('http');
const { Server } = require('socket.io');
const express = require('express');
// const http = require('http');
const cors = require('cors');
const User = require('./controllers/users');
const Product = require('./controllers/products');

const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
// const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

require('../sockets')(io);

app.use((_req, res, next) => {
  res.io = io;
  next();
});

// const io = require('socket.io')(httpServer, {
//   cors: {
//     origin: 'http://localhost:3000',
//     method: ['GET', 'POST'],
//   },
// });

app.use('/images', express.static(`${__dirname}/../../public`));

app.get('/', () => console.log('hello world!'));

app.post('/login', User.loginUser);
app.post('/register', User.registerUser);
app.get('/users', User.getAllUsers);
app.get('/customer/products', User.getAllUsers);
app.get('/products', Product.getAllProducts);

app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = server;
