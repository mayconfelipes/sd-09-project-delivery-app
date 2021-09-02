const { product: Product } = require('../models');

const getAll = async () => {
  const products = await Product.findAll();

  return products;
};

const getById = async (id) => {
  const productDetails = await Product.findByPk(id);

  return productDetails;
};

const createNew = async (newData) => {
  const product = await Product.create(newData);
  return product;
};

module.exports = {
  getAll,
  getById,
  createNew,
};