const express = require('express');
const User = require('../../controllers/User');
const validateToken = require('../../middlewares/validateToken');

const router = express.Router();

router.post('/login', [User.login]);
router.post('/', [User.register]);
router.post('/admin', validateToken, [User.register]);
router.get('/', [User.getAllUsers]);

module.exports = router;
