const express = require('express');
const { getAllP, getPById } = require('../controllers/ProductsController');
const { jwtValidate } = require('../middlewares/jwtValidation');

const router = express.Router();

router.get('/', jwtValidate, getAllP);
router.get('/:id', jwtValidate, getPById);

module.exports = router;
