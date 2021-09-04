const { salesProducts } = require('../../database/models');

const getAll = async () => {
  const allSales = await salesProducts.findAll();
 return allSales;
};

const getById = async (sale_id) => {
  const sale = await salesProducts.findOne({
    where: { sale_id },
  });
  return sale;
};

module.exports = {
  getById,
  getAll,
};
