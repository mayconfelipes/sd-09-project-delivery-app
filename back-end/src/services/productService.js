const { product, sale, salesProducts } = require('../database/models');

const getProductsAll = async () => {
  const products = await product.findAll({});
  return products;
};

const saveOrder = async ({ orderData }) => {
  const formatedOrder = {
    userId: orderData.userId,
    sellerId: orderData.sellerId,
    totalPrice: orderData.totalCart,
    deliveryAddress: orderData.deliveryAddress,
    deliveryNumber: orderData.deliveryNumber,
    saleDate: new Date(),
    status: 'Pendente',
  };
  const order = await sale.create(formatedOrder);
  return order.id;
};

const createSalesProducts = async (orderId, listItens) => {
  const list = listItens
  .map((item) => ({ saleId: orderId, productId: item.productId, quantity: item.quantity }));
  const createList = await salesProducts.bulkCreate(list);
  return (createList);
};

module.exports = { getProductsAll, saveOrder, createSalesProducts };
