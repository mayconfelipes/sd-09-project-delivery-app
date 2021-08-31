const express = require('express');

const loginController = require('../controllers/loginController');

const router = express.Router();

router.use('/login', loginController);

module.exports = router;
