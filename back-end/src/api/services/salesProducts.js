const { salesProducts } = require('../../database/models');

const getAll = async () => {
  const allSales = await salesProducts.findAll();
 return allSales;
};

const getById = async (id) => {
  const sale = await salesProducts.findOne({
    where: { id },
  });
  return sale;
};


module.exports = {
  getAll,
};
