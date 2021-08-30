const express = require('express');
const User = require('../controllers/Users');
const validateLogin = require('../middlewares/auth/validateLogin');

const router = express.Router();

router.post('/', validateLogin, User.login);

module.exports = router;
