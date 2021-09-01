const router = require('express').Router();

const login = require('./login');
const users = require('./users');
const products = require('./products');
const sales = require('./sales');

router.use('/login', login);
router.use('/users', users);
router.use('/products', products);
router.use('/sales', sales);

module.exports = router;
