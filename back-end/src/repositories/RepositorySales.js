const { Sale, SalesProducts } = require('../database/models');

const createSale = async (
  { userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status }) => {
  const newSale = await Sale
    .create({ userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status });

  return newSale.dataValues;
};

const createSaleProduct = async (saleId, productId, quantity) => {
  await SalesProducts.create({ saleId, productId, quantity });
};

module.exports = {
  createSale,
  createSaleProduct,
};