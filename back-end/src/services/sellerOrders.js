const { sales, salesProducts, products } = require('../database/models');

const sellerOrders = async (sellerId) => {
  const orders = await sales.findAll({ where: { sellerId } });
  return orders;
};

const saleDetails = async (/* saleId */) => {
  const salesAndProducts = await salesProducts.findAll({
    include: [
      { model: products, as: 'products' },
      { model: sales, as: 'sales', throug: { attributes: [] } },
    ],
  });
  return salesAndProducts;
};

module.exports = {
  sellerOrders,
  saleDetails,
};
