const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');
const loginController = require('../loginController');

const router = express.Router();

router.use('/ping', pingController);

router.use('/register', registerController);

router.use('/login', loginController);

module.exports = router;