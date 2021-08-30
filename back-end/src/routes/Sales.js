const express = require('express');
const Sales = require('../controllers/Sales');
const token = require('../middlewares/auth/token');

const router = express.Router();

router.post('/', token, Sales.createSale);

router.get('/', token, Sales.getAll);

router.get('/:id', token, Sales.getById);

router.put('/:id', token, Sales.updateSale);

module.exports = router;