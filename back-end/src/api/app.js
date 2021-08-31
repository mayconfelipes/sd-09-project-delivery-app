const express = require('express');
const bodyParser = require('body-parser');
const { error } = require('./middlewares/Error');

const app = express();
app.use(bodyParser.json());

const { loginRouter } = require('./routes');
const { registerRouter } = require('./routes');

app.use('/', loginRouter);
app.use('/', registerRouter);

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(error);
module.exports = app;
