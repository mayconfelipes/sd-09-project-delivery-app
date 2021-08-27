const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const allProducts = await Product.findAll();
  return allProducts.map((product) => product.dataValues);
};

module.exports = {
  getAllProducts,
};
