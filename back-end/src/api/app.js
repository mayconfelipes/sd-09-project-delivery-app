const express = require('express');
const bodyParser = require('body-parser').json();

const app = express();

const Router = require('./Router');
const { handleError } = require('../middlewares');

app.use(bodyParser);

app.use('/coffee', Router.coffeeRoutes);
app.use('/login', Router.loginRoutes);

app.use(handleError);

module.exports = app;
