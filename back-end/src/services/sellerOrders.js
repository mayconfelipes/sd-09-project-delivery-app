const { sales, products } = require('../database/models');

const sellerOrders = async (sellerId) => {
  const orders = await sales.findAll({ where: { sellerId } });
  return orders;
};

const saleDetails = async (saleId) => {
  const salesAndProducts = await sales.findAll({
    where: { id: saleId },
    include: [
      { model: products, as: 'products' },
    ],
  });
  return salesAndProducts;
};

module.exports = {
  sellerOrders,
  saleDetails,
};
