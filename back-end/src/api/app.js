const express = require('express');

const app = express();
const Router = require('./Router');

app.use('/coffee', Router.coffeeRoutes);

app.use('/user', Router.userRoutes);

module.exports = app;
