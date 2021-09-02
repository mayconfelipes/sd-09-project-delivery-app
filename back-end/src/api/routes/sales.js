const router = require('express').Router();

const { authentication } = require('../middlewares');
const { salesController } = require('../controllers');

// Criação de venda (disparada no checkout)
router.post('/', authentication, salesController.create);

// Listar vendas
router.get('/', authentication, salesController.getAll);

// Lista detalhe de uma venda
router.get('/:id', authentication, salesController.getById);

module.exports = router;
