const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const { productService } = require('../service');

router.get('/', rescue(async (_req, res, next) => {
  const serviceResponse = await productService.getProducts();
  if (!serviceResponse) {
    return next({
      statusCode: 404,
      message: 'Not Found Products',
    });
  }
    return res.status(200).json(serviceResponse);
}));

module.exports = router;
