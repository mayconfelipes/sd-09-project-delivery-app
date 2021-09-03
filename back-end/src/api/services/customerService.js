const { Product, Sale } = require('../../database/models');

const errorTypes = require('../utils/errorTypes');

const getProducts = async () => {
  const products = await Product.findAll();

  if (!products) {
    const error = errorTypes.noProductsFound;

    return { error };
  }

  return { products };
};

const getOrders = async (id) => {
  const orders = await Sale.findAll({ where: { id } });

  return { orders };
};

const getOrderById = async (id) => {
  const order = await Sale.findByPk(id);

  if (!order) {
    const error = errorTypes.OrderNotFound;

    return { error };
  }

  return { order };
};

module.exports = { getProducts, getOrders, getOrderById };