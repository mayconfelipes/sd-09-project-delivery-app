const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../routes');
const erroMiddleware = require('../middlewares/error');

const app = express();
app.use(bodyParser.json());

app.use('/users', routes.Users);

app.use('/sales', routes.Sales);

app.use('/products', routes.Products);

app.use(erroMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
