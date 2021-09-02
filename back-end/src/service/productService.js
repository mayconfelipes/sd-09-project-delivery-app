const { Product } = require('../database/models');

const getProducts = async () => {
  const response = await Product.findAll();

  return response;
};

module.exports = {
  getProducts,
};
