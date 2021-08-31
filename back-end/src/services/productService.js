const { product } = require('../database/models');

const getProductsAll = async () => {
  const products = await product.findAll({});
  return products;
};

module.exports = { getProductsAll };