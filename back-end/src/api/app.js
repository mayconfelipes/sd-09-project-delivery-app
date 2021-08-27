const express = require('express');
const bodyParser = require('body-parser').json();

const router = require('./router/router');

const app = express();
app.use(bodyParser);

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(router);

module.exports = app;
