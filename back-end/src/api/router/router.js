const express = require('express');

const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.use('/login', loginController);
router.use('/register', registerController);
router.use('/customer', customerController);

module.exports = router;
