const ModelProduct = require('../database/models/product');

const getProductsAll = async () => {
  const products = await ModelProduct.findAll();
  return products;
};

module.exports = { getProductsAll };