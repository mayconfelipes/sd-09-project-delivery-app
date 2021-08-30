const express = require('express');
const User = require('../../controllers/User');

const router = express.Router();

router.post('/login', [User.login]);
router.post('/', [User.register]);

module.exports = router;
