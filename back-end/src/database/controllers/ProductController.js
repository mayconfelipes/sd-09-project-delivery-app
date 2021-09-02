const rescue = require('express-rescue');
const Product = require('../services/ProductService');

const listProducts = rescue(async(_req, res) => {
  const products = await Product.getAll();

  return res.status(200).json(products);
});

const detailProducts = async (req, res) => {
  const { id } = req.params;

  const product = await Product.getById(id);

  return res.status(200).json(product);
};

module.exports = {
  listProducts,
  detailProducts,
};