const { product } = require('../../database/models');

const getAllProducts = async () => {
  const products = await product.findAll();
  return products;
};

const getProductById = async (id) => product.findOne({ where: { id } });

module.exports = { getAllProducts, getProductById };
