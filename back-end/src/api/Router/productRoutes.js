const express = require('express');
const Product = require('../../controllers/Product');

const router = express.Router();

router.get('/', [Product.findAll]);

module.exports = router;
