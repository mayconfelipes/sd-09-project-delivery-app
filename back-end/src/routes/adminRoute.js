const express = require('express');
const UserController = require('../database/controllers/UserController');

const router = express.Router();

router.post('/register-user', UserController.registerByAdmin);

module.exports = router;
