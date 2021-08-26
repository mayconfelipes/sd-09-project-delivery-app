const express = require('express');
const User = require('../database/controllers/UserController');
const errorMiddleware = require('../utils/errorMiddleware');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/login', User.login);

app.use(errorMiddleware);

module.exports = app;
