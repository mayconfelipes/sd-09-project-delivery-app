const express = require('express');
const routes = require('../routes');

const app = express();

app.use('/users', routes.Users);

app.use('/sales', routes.Sales);

app.use('/products', routes.Products);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
