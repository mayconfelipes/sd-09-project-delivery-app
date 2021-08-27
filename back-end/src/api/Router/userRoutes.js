const express = require('express');
const User = require('../../controllers/User');

const router = express.Router();

router.post('/', [User.login]);

module.exports = router;
