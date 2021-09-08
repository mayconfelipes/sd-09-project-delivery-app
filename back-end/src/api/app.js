const socketPort = process.env.SOCKET_PORT || 3002;
const express = require('express');
const bodyParser = require('body-parser').json();
const cors = require('cors');
const http = require('http');
const socketio = require('socket.io');

const app = express();

app.use(cors());

const Router = require('./Router');
const { handleError } = require('../middlewares');

app.use(bodyParser);
app.use(express.static('public')); 

app.use('/coffee', Router.coffeeRoutes);
app.use('/user', Router.userRoutes);
app.use('/product', Router.productRoutes);
app.use('/sale', Router.saleRoutes);

app.use(handleError);

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log(`Usuário de ID ${socket.id} logou.`);
  
  socket.on('statusUpdate', ({ status, position }) => {
    socket.broadcast.emit('statusUpdate', status);
    socket.broadcast.emit('orders', { status, position });
  });
  
  socket.on('disconnect', () => console.log(`Usuário ${socket.id} desconectou.`));
});

server.listen(socketPort, 'localhost',
  () => console.log(`Socket aberto na porta ${socketPort}`));

module.exports = app;
