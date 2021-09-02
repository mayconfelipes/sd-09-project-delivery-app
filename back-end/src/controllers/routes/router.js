const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');
const loginController = require('../loginController');
const salesOrdersController = require('../salesOrdersController');
const customerOrders = require('../customerOrders');

const router = express.Router();

router.use('/ping', pingController);

router.use('/register', registerController);

router.use('/login', loginController);

router.use('/sales', salesOrdersController);

router.use('/customer', customerOrders);

module.exports = router;