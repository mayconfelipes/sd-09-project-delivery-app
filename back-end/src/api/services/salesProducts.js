const { sales_products } = require('../../database/models');

const getAll = async () => {
  const allSales = await sales_products.findAll();
 return allSales;
};

module.exports = {
  getAll,
};
