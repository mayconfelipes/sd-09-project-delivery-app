const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const { seller } = require('../service');

router.get('/', rescue(async (_req, res, next) => {
  const serviceResponse = await seller.findSeller();
  if (!serviceResponse) {
    return next({
      statusCode: 404,
      message: 'Seller Not Found',
    });
  }
    return res.status(200).json(serviceResponse);
}));

module.exports = router;
