const express = require('express');

const app = express();

app.get('/coffee', (req, res) => res.status(418).end());

module.exports = app;
