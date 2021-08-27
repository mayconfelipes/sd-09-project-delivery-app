const express = require('express');
const bodyParser = require('body-parser');

const { sendErrorMessage } = require('./middwares/errors');
const { products } = require('./controllers/products');

const app = express();
app.use(bodyParser.json());

app.get('/products', products);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(sendErrorMessage);

module.exports = app;
