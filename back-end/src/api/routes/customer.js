const router = require('express').Router();
const authentication = require('../middlewares/authentication');

const { customerController } = require('../controllers');

// Fluxo do Cliente
// Criação do endpoint produtos
router.get('/products',  authentication, customerController.getAll);

module.exports = router;
