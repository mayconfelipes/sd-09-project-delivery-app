const router = require('express').Router();

const { customerController } = require('../controllers');

// Fluxo do Cliente
// Criação do endpoint produtos
router.get('/products', customerController.getAll);

module.exports = router;
