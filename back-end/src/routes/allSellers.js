const express = require('express');
const UserController = require('../database/controllers/UserController');

const router = express.Router();

router.post('/allSellers', UserController.login);

module.exports = router;
