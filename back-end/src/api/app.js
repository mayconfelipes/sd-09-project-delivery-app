const express = require('express');
const path = require('path');

const loginRoute = require('../routes/loginRoute');
const registerRoute = require('../routes/registerRoute');
const productRoute = require('../routes/productRoute');
// const saleRoute = require('../routes/saleRoute');

const errorMiddleware = require('../utils/errorMiddleware');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', productRoute);

app.use(express.static(path.join(__dirname, '../', '../', 'public')));

app.use(errorMiddleware);

module.exports = app;
