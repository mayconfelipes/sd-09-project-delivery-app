const rescue = require('express-rescue');
const Product = require('../services/Product');

const findAll = rescue(async (_req, res) => {
  const products = await Product.findAll();

  return res.status(200).json(products);
});

module.exports = {
  findAll,
};
