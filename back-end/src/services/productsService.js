const { product } = require('../database/models');

const getAll = async () => {
  const products = await product.findAll({});
  return products;
};

module.exports = {
  getAll,
};
