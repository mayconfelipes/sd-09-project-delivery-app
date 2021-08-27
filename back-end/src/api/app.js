const express = require('express');

const app = express();

const validadeUserExists = require('../middlewares');
const login = require('../controllers/loginController');

app.get('/coffee', (_req, res) => res.status(418).end());

app.post('/login', validadeUserExists, login);

module.exports = app;
