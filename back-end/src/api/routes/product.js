const express = require('express');
const Product = require('../controllers/product');
const JoiValidate = require('../middlewares/JoiValidate');
const { product } = require('../utils/JoiSchemas');
const validate = require('../middlewares/validators');

const route = express.Router();

route.use(validate.token);

route.post('/', JoiValidate(product), Product.create);
route.get('/', Product.findAll);
route.get('/:id', Product.findOne);
route.put('/:id', JoiValidate(product), Product.update);
route.delete('/:id', Product.destroy);

module.exports = route;
