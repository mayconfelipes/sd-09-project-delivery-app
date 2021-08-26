const express = require('express');
const Sales = require('../controllers/Sales');

const router = express.Router();

router.post('/', Sales.createSale);

router.get('/', Sales.getAll);

router.get('/:id', Sales.getById);

router.put('/:id', Sales.updateSale);

router.delete('/:id', Sales.deleteSale);

module.exports = router;