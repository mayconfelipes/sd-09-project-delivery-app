const express = require('express');
const rescue = require('express-rescue');

// const productsController = require('../controllers/Products');
const { getAllProducts } = require('../controllers/Products');

const router = express.Router();

router.get('/', /* validateToken, */ rescue(getAllProducts));

module.exports = router;
