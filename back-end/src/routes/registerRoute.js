const express = require('express');
const UserController = require('../database/controllers/UserController');

const router = express.Router();

router.post('/', UserController.register);

module.exports = router;