const { salesProducts } = require('../../database/models');

const getAll = async () => {
  const allSales = await salesProducts.findAll();
 return allSales;
};

module.exports = {
  getAll,
};
