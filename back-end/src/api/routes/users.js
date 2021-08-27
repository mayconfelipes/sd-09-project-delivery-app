const router = require('express').Router();

const { usersController } = require('../controllers');

// Criação de usuário
router.post('/register', usersController.create);

module.exports = router;
