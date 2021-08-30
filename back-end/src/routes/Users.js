const express = require('express');
const User = require('../controllers/Users');
const validateUser = require('../middlewares/auth/user/validateUser');
const token = require('../middlewares/auth/token');

const router = express.Router();

router.post('/', token, validateUser, User.createUser);

router.get('/', token, User.getAll);

router.delete('/:id', token, User.deleteUser);

module.exports = router;