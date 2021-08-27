const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const controllers = require('../controller/productController');

const app = express();
app.use(bodyParser.json());

app.get('/products', controllers.getProducts)

app.get('/', (_req, res) => res.status(200).send('Oi'))

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
