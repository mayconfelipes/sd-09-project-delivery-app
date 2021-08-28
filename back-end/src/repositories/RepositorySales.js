const { 
  Sale,
  SalesProducts,
  Product,
} = require('../database/models');

const createSale = async (
  { userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status }) => {
  const newSale = await Sale
    .create({ userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status });

  return newSale.dataValues;
};

const createSaleProduct = async (saleId, productId, quantity) => {
  await SalesProducts.create({ saleId, productId, quantity });
};

const getSalesByUserId = async ({ userId }) => {
  const sales = Sale.findAll({
    where: { userId },
  });

  return sales;
};

const getSalesBySaleId = async ({ saleId }) => {
  const sales = SalesProducts.findAll({
    where: { saleId },
    include: [
      { model: Sale, as: 'sale' },
      { model: Product, as: 'product' },
    ],
  });

  return sales;
};

module.exports = {
  createSale,
  createSaleProduct,
  getSalesByUserId,
  getSalesBySaleId,
};