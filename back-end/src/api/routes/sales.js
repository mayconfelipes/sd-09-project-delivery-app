const router = require('express').Router();

const { salesController } = require('../controllers');

// Criação de venda (disparada no checkout)
router.post('/', salesController.create);

module.exports = router;
