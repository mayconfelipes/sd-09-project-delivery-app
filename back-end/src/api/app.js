require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
// app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

const controllers = require('../controller');
const middlewares = require('../middlewares');

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', controllers.login);
app.use('/products', controllers.products);
app.use('/register', controllers.registerUser);
app.use('/sales', controllers.sales);
app.use('/seller', controllers.seller);

app.use(middlewares.error);

module.exports = app;
