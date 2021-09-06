const express = require('express');
const pingController = require('../pingController');
const registerController = require('../registerController');
const loginController = require('../loginController');
const productsController = require('../productsController');
const imagesController = require('../imagesController');
const salesOrdersController = require('../salesOrdersController');
<<<<<<< HEAD
<<<<<<< HEAD
const getUsersController = require('../getUsersController');
const createSaleController = require('../createSaleController');
=======
const customerOrders = require('../customerOrders');
>>>>>>> 7499452c358657a2a03dfce2943393963144e479
=======
const getUsersController = require('../getUsersController');
const createSaleController = require('../createSaleController');
const customerOrders = require('../customerOrders');
>>>>>>> 0a14537698e35b528e43b7b9ff0858386daeb54a

const router = express.Router();

router.use('/ping', pingController);

router.use('/login', loginController);
router.use('/register', registerController);
router.use('/products', productsController);
router.use('/images', imagesController);

router.use('/seller', salesOrdersController);

router.use('/customer', customerOrders);

router.use('/users', getUsersController);

router.use('/new', createSaleController);

module.exports = router;