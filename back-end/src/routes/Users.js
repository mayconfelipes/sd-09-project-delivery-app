const express = require('express');
const User = require('../controllers/Users');

const router = express.Router();

router.post('/', User.createUser);

router.get('/', User.getAll);

router.get('/:id', User.getById);

router.put('/:id', User.updateUser);

router.delete('/:id', User.deleteUser);

module.exports = router;