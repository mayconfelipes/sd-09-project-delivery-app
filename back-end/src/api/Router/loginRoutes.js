const express = require('express');
const Login = require('../../controllers/Login');

const { validateEmail, validatePassword } = require('../../middlewares');

const router = express.Router();

router.post('/', [validateEmail, validatePassword, Login.login]);

module.exports = router;
