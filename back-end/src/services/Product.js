const { Product } = require('../database/models');

const findAll = async () => {
  const products = await Product.findAll();
  console.log(products);

  return products;
};

module.exports = {
  findAll,
};