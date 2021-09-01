const express = require('express');

const loginController = require('../controllers/loginController');
const registerController = require('../controllers/registerController');

const router = express.Router();

router.use('/login', loginController);
router.use('/register', registerController);

module.exports = router;
