const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');
const loginController = require('../loginController');
const productsController = require('../productsController');

const router = express.Router();

router.use('/ping', pingController);

router.use('/login', loginController);
router.use('/register', registerController);
router.use('/products', productsController);

module.exports = router;