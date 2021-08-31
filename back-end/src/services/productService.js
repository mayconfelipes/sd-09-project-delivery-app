const { product, sale } = require('../database/models');

const getProductsAll = async () => {
  const products = await product.findAll({});
  return products;
};

const saveOrder = async ({ orderData }) => {
  const order = await sale.create(orderData);

  return order;
};

module.exports = { getProductsAll, saveOrder };
