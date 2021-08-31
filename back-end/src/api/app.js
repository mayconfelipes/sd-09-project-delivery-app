const express = require('express');
const bodyParser = require('body-parser').json();
const cors = require('cors');

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Authorization'],
}));

const Router = require('./Router');
const { handleError } = require('../middlewares');

app.use(bodyParser);

app.use('/coffee', Router.coffeeRoutes);
app.use('/user', Router.userRoutes);
app.use('/product', Router.productRoutes);
app.use('/sale', Router.saleRoutes);

app.use(handleError);

module.exports = app;
