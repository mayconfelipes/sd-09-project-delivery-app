const router = require('express').Router();

const { usersController } = require('../controllers');
const { authentication } = require('../middlewares');

// Criação de usuário
router.post('/register', usersController.create);

// Listar usuários
router.get('/', authentication, usersController.getAll);

// Remoção de usuários
router.delete('/:id', authentication, usersController.remove);

module.exports = router;
