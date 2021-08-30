const { products } = require('../../database/models');

const getAllProducts = async () => {
  const allProducts = await products.findAll();
  return allProducts;
};

module.exports = {
  getAllProducts,
};