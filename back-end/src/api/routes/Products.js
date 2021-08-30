const express = require('express');
const { getAllP, getPById } = require('../controllers/Products');

const router = express.Router();

router.get('/customer/products', getAllP);
router.get('/customer/products:id', getPById)

module.exports = router;
