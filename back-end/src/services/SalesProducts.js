const { salesProducts, sales, products } = require('../database/models');

const createSaleProduct = async (body) => {
  const { dataValues } = await salesProducts.create({ ...body });

  return dataValues;
};

const getAll = async () => {
  const allSalesProducts = await salesProducts.findAll({ include: [
    { model: sales, as: 'sale' },
    { model: products, as: 'product' },
  ] });

  return allSalesProducts;
};

module.exports = {
  createSaleProduct,
  getAll,
};
