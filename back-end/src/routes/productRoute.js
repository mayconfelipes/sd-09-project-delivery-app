const express = require('express');
const rescue = require('express-rescue');
const ProductController = require('../database/controllers/ProductController');
const upload = require('../database/services/uploads/imageUpload');

const router = express.Router();

router.get('/', rescue(ProductController.listProducts));
router.get('/:id', rescue(ProductController.detailProducts));
// Este método deverá ser multipart form data, para receber a imagem e salvá-la no public
router.post('/', upload.single('imageUrl'), rescue(ProductController.createProduct));

module.exports = router;
