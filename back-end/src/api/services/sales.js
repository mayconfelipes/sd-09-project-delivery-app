const { User, Sale, Product, SalesProduct } = require('../../database/models');

const addProductsToSale = async (saleId, products) => {
  for (const { productId, quantity } of products) {
    await SalesProduct.create({ SaleId: saleId, ProductId: productId, quantity });
  }
};

const getOrderById = async (id) => {
  const { dataValues: orderById } = await Sale.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['id', 'password', 'role'] } },
      { model: User, as: 'seller', attributes: { exclude: ['id', 'password', 'role'] }},
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });
  orderById.products.map((product) => {
    product.dataValues.quantity = product.dataValues.SalesProduct.quantity;
    delete product.dataValues.SalesProduct;
    return product;
  });
  return orderById;
};

const newOrder = async ({ products, ...orderWithoutProducts }) => {
  const { dataValues: newOrder } = await Sale.create({ ...orderWithoutProducts });
  await addProductsToSale(newOrder.id, products);
  const registeredOrder = await getOrderById(newOrder.id);
  return registeredOrder;
};

const getAllOrders = async (userId) => {
  const allOrders = await Sale.findAll({ where: { userId } });
  return Promise.all(allOrders.map(async (order) => await getOrderById(order.id)));
};

const getAllSales = async (sellerId) => {
  const allSales = await Sale.findAll({ where: { sellerId } });
  return Promise.all(allSales.map(async (sale) => await getOrderById(sale.id)));
};

const updateOrderStatus = async (id, status) => {
  const orderToUpdate = await Sale.findByPk(id);
  orderToUpdate.status = status;
  await orderToUpdate.save();
  const updatedOrder = await getOrderById(id);
  return updatedOrder;
};

module.exports = {
  newOrder,
  getOrderById,
  getAllOrders,
  getAllSales,
  updateOrderStatus,
};
