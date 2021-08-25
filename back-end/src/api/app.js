const express = require('express');
const path = require('path');
const UserController = require('./controllers/User');

const app = express();

app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(UserController);

module.exports = app;
