const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const { error } = require('./middlewares/Error');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const loginRouter = require('./routes/LoginRoute');
const registerRouter = require('./routes/RegisterRoute');
const sellerRouter = require('./routes/SellerRoute');
const productsRouter = require('./routes/ProductsRoute');
const userRouter = require('./routes/userRoutes');
const orderRouter = require('./routes/orderRoute');

app.use(express.static(path.join(__dirname, '../..', 'src')));

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/customer/products', productsRouter);
app.use('/seller', sellerRouter);
app.use('/customer/orders', orderRouter);
app.use('/users', userRouter);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(error);
module.exports = app;
