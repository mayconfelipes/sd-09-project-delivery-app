const express = require('express');

const User = express.Router();

User.get('/user', (_req, res) => res.status(200).json({ message: 'Olá' }));

module.exports = User;
