const express = require('express');
const bodyParser = require('body-parser').json();

const app = express();
const Router = require('./Router');

app.use(bodyParser);

app.use('/coffee', Router.coffeeRoutes);
app.use('/user', Router.userRoutes);

module.exports = app;
