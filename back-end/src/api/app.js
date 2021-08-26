const express = require('express');

const app = express();
const Router = require('./Router')

app.use('/coffee', Router.coffeeRoutes);

module.exports = app;
