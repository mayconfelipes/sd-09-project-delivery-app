const { User, Sale, Product, SalesProduct } = require('../../database/models');
const newError = require('../utils/newError');

const addProductsToSale = async (saleId, products) => {
  const result = await Promise
    .all(products.map(async ({ productId, quantity }) => SalesProduct
      .create({ SaleId: saleId, ProductId: productId, quantity })));
  return result;
};

const getFormattedOrderById = async (id) => {
  const { dataValues: orderById } = await Sale.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: User, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  orderById.products.map((product) => {
    const updatedProduct = product;
    updatedProduct.dataValues.quantity = updatedProduct.dataValues.SalesProduct.quantity;
    delete updatedProduct.dataValues.SalesProduct;
    return updatedProduct;
  });
  return orderById;
};

const newOrder = async ({ products, ...orderWithoutProducts }) => {
  const { dataValues: order } = await Sale.create({ ...orderWithoutProducts });
  await addProductsToSale(order.id, products);
  const registeredOrder = await getFormattedOrderById(order.id);
  return registeredOrder;
};

const getAllOrders = async (userId) => {
  const allOrders = await Sale.findAll({ where: { userId } });
  return Promise.all(allOrders.map(async (order) => getFormattedOrderById(order.id)));
};

const getAllSales = async (sellerId) => {
  const allSales = await Sale.findAll({ where: { sellerId } });
  return Promise.all(allSales.map(async (sale) => getFormattedOrderById(sale.id)));
};

const getOrderById = async (orderId, userId) => {
  const orderById = await getFormattedOrderById(orderId);
  if (orderById.userId === userId || orderById.sellerId === userId) {
    return orderById;
  }
  throw newError(403, 'Unauthorized user');
};

const updateOrderStatus = async (id, status) => {
  const orderToUpdate = await Sale.findByPk(id);
  orderToUpdate.status = status;
  await orderToUpdate.save();
  const updatedOrder = await getFormattedOrderById(id);
  return updatedOrder;
};

module.exports = {
  newOrder,
  getOrderById,
  getAllOrders,
  getAllSales,
  updateOrderStatus,
};
