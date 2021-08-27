const express = require('express');
const bodyParser = require('body-parser');

const { sendErrorMessage } = require('./middwares/errors');

const app = express();
app.use(bodyParser.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(sendErrorMessage);

module.exports = app;
