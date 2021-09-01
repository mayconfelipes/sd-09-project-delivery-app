const express = require('express');
const bodyParser = require('body-parser').json();
// const cors = require('cors');
const router = require('./router/router');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(bodyParser);
// app.use(cors);
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(router);

app.use(errorHandler);

module.exports = app;
