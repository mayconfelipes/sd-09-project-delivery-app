const express = require('express');
const { login } = require('../controllers/LoginController');

const router = express.Router();

router.post('/', login);

module.exports = router;
