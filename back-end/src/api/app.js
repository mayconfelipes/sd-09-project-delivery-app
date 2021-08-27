const express = require('express');

const Sale = require('../database/controllers/SaleController');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/teste', Sale.getAll);

module.exports = app;
