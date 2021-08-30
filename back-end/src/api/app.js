const express = require('express');

const path = require('path');

const loginRoute = require('../routes/loginRoute');
const registerRoute = require('../routes/registerRoute');
const productRoute = require('../routes/productRoute');
// const saleRoute = require('../routes/saleRoute');

const cors = require('cors');

const errorMiddleware = require('../utils/errorMiddleware');
const authMiddleware = require('../database/services/jwt/authMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);

app.use(express.static(path.join(__dirname, '../', '../', 'public')));

app.post('/customer/checkout', authMiddleware, Sale.checkOut);

app.use(errorMiddleware);

module.exports = app;
