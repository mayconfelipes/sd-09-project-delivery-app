const express = require('express');

const router = express.Router();

const ControllerProducts = require('../controllers/ControllerProducts');

router.get('/products', ControllerProducts.getAllProducts);

module.exports = router;