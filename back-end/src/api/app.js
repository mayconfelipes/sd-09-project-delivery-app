const express = require('express');
// const http = require('http');
const cors = require('cors');
const User = require('./controllers/users');
const Product = require('./controllers/products');
const Sale = require('./controllers/sales');
const errorMiddleware = require('./middlewares/errorMiddleware');
const auth = require('./middlewares/authMiddleware');

const app = express();
// const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

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
app.get('/sellers', User.getAllSellers);
app.get('/customer/products', User.getAllUsers);
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
