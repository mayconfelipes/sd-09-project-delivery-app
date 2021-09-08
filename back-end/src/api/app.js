const app = require('express')();
const express = require('express');
const socket = require('socket.io');
const httpServer = require('http').createServer(app);
const cors = require('cors');
const deliveryIo = require('./sockets/deliveryApp');

const io = socket(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

deliveryIo(io);

const User = require('./controllers/users');
const Product = require('./controllers/products');
const Sale = require('./controllers/sales');
const errorMiddleware = require('./middlewares/errorMiddleware');
const auth = require('./middlewares/authMiddleware');

app.use(express.json());
app.use(cors());

app.use('/images', express.static(`${__dirname}/../../public`));


app.post('/login', User.loginUser);
app.post('/register', User.registerUser);
app.get('/users', User.getAllUsers);
app.get('/sellers', User.getAllSellers);
app.get('/products', Product.getAllProducts);
app.get('/sellers', User.getAllSellers);

app.post('/orders', auth, Sale.newOrder);
app.get('/orders/:orderId', auth, Sale.getOrderById);
app.get('/orders', auth, Sale.getAllOrders);
app.get('/sales', auth, Sale.getAllSales);
app.put('/orders/:orderId', auth, Sale.updateOrderStatus);
app.put('/sales/:orderId', auth, Sale.updateSaleStatus);

app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
