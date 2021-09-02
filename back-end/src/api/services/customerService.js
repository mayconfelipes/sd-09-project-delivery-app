const { Product } = require('../../database/models');

const errorTypes = require('../utils/errorTypes');

const getAll = async () => {
  const products = await Product.findAll();

  if (!products) {
    const error = errorTypes.noProductsFound;

    return { error };
  }

  return products;
};

module.exports = { getAll };