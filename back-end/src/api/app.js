const express = require('express');
const cors = require('cors');
const User = require('../database/controllers/UserController');
const errorMiddleware = require('../utils/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/login', User.login);
app.post('/register', User.register);

app.use(errorMiddleware);

module.exports = app;
