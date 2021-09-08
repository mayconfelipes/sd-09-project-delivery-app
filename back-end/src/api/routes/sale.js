const express = require('express');
const Sale = require('../controllers/sale');
const JoiValidate = require('../middlewares/JoiValidate');
const { sale } = require('../utils/JoiSchemas');
const validate = require('../middlewares/validators');

const route = express.Router();

route.use(validate.token);

route.post('/', JoiValidate(sale), Sale.create);
route.get('/', Sale.findAll);
route.get('/:id', Sale.findOne);
route.put('/:id', Sale.update);
route.delete('/:id', Sale.destroy);

module.exports = route;
