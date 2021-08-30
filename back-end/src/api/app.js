const express = require('express');
const bodyParser = require('body-parser').json();

const app = express();

const Router = require('./Router');
const { handleError } = require('../middlewares');

app.use(bodyParser);

app.use('/coffee', Router.coffeeRoutes);
app.use('/user', Router.userRoutes);
app.use('/product', Router.productRoutes);
app.use('/sale', Router.saleRoutes);

app.use(handleError);

module.exports = app;
