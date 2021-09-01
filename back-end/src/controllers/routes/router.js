const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');
const loginController = require('../loginController');
const salesOrdersController = require('../salesOrdersController');

const router = express.Router();

router.use('/ping', pingController);

router.use('/register', registerController);

router.use('/login', loginController);

router.use('/sales', salesOrdersController);

module.exports = router;