const express = require('express');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).json({ message: 'test' }));

module.exports = app;
