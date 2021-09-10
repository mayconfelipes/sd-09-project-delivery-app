const express = require('express');
const SalesProducts = require('../../controllers/salesProducts');

const router = express.Router();

router.get('/', [SalesProducts.findAll]);
router.get('/:id', [SalesProducts.findByPk]);

module.exports = router;