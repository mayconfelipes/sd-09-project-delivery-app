const express = require('express');
const ProductController = require('../database/controllers/ProductController');

const router = express.Router();

router.get('/', ProductController.listProducts);
router.get('/:id', ProductController.detailProducts);
// Este método deverá ser multipart form data, para receber a imagem e salvá-la no public
// router.post('/', ProductController.createProduct);

module.exports = router;
