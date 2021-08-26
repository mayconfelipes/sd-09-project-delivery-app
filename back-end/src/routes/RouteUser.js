const express = require('express');

const router = express.Router();

const ControllerUsers = require('../controllers/ControllerUsers');
const Middlewares = require('../middlewares');

router.post('/login', Middlewares.validLogin, ControllerUsers.login);
router.post('/register', Middlewares.validRegister, ControllerUsers.register);

module.exports = router;