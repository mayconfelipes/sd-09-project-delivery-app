const RepositoryProducts = require('../repositories/RepositoryProducts');

const getAllProducts = async () => {
  const products = await RepositoryProducts.getAllProducts();

  return products;
};

module.exports = {
  getAllProducts,
};