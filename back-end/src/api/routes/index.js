const router = require('express').Router();

const login = require('./login');
const users = require('./users');
const customer = require('./customer');
const sales = require('./sales');

router.use('/login', login);
router.use('/users', users);
router.use('/customer', customer);
router.use('/sales', sales);

module.exports = router;
