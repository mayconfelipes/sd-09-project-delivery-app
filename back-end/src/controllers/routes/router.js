const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');
const loginController = require('../loginController');
const productsController = require('../productsController');
const imagesController = require('../imagesController');
const salesOrdersController = require('../salesOrdersController');

const router = express.Router();

router.use('/ping', pingController);

router.use('/login', loginController);
router.use('/register', registerController);
router.use('/products', productsController);
router.use('/images', imagesController);

router.use('/sales', salesOrdersController);

module.exports = router;