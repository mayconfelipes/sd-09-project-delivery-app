const router = require('express').Router();

const login = require('./login');
const users = require('./users');
const customer = require('./customer');

router.use('/login', login);
router.use('/users', users);
router.use('/customer', customer);

module.exports = router;
