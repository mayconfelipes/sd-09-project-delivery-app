const express = require('express');
const rescue = require('express-rescue');

// const productsController = require('../controllers/Products');
const { getALlProducts } = require('../controllers/Products');

const router = express.Router();

router.get('/', /* validateToken, */ rescue(getALlProducts));

module.exports = router;
