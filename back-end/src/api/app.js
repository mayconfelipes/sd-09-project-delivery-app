const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const controller = require('../controller');
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', controller.login);

module.exports = app;
