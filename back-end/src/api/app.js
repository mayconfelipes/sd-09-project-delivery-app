const express = require('express');
const cors = require('cors');
const User = require('../database/controllers/UserController');
const Sale = require('../database/controllers/SaleController');
const errorMiddleware = require('../utils/errorMiddleware');
const authMiddleware = require('../database/services/jwt/authMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.post('/login', User.login);
app.post('/register', User.register);

app.post('/customer/checkout', Sale.checkOut);

app.use(errorMiddleware);

module.exports = app;
