const router = require('express').Router();

const { usersController } = require('../controllers');
const { authentication, authenticationAttempt } = require('../middlewares');

// Criação de usuário
router.post('/register', usersController.create);

// Listar usuários
router.get('/', authentication, usersController.getAll);

// Remoção de usuários
router.delete('/:id', authenticationAttempt, usersController.remove);

module.exports = router;
