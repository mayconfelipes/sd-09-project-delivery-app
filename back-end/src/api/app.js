const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('./middlewares/Error');

const app = express();
app.use(bodyParser.json());

const Login = require('./routes/Login');

app.use('/', Login);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(error);
module.exports = app;
