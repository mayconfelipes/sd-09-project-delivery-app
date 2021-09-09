const express = require('express');
const { register } = require('../controllers/RegisterController');

const router = express.Router();

router.post('/', register);

module.exports = router;
