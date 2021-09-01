const router = require('express').Router();

const { productsController } = require('../controllers');

// Listagem de produtos
router.get('/', productsController.getAll);

module.exports = router;
