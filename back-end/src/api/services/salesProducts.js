const { salesProducts, sales } = require('../../database/models');

const getAll = async () => {
  const allSales = await salesProducts.findAll();
 return allSales;
};

const getById = async (saleId) => {
  const sale = await salesProducts.findAll({
    where: { saleId },
    include: [
      { attributes: ['delivery_address', 'totalPrice', 'sale_date', 'status'], model: sales, as: 'sale' },
  ],
  });
  return sale;
};

module.exports = {
  getById,
  getAll,
};
