const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('./middlewares/Error');

const app = express();
app.use(bodyParser.json());
app.use(error);

const Login = require('./routes/Login');

app.use('/', Login);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
