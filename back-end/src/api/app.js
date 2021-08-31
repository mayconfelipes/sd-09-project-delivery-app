const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { error } = require('./middlewares/Error');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const Login = require('./routes/Login');
const Products = require('./routes/Products');

app.use(Login);
app.use(Products);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(error);
module.exports = app;
