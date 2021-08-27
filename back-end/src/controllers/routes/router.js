const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');

const router = express.Router();

router.use('/ping', pingController);
// router.use('/login', )

router.use('/register', registerController);

module.exports = router;