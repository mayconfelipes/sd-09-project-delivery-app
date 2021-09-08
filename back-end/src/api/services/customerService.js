const moment = require('moment');

const { Product, Sale, User } = require('../../database/models');

const errorTypes = require('../utils/errorTypes');

const getProducts = async () => {
  const products = await Product.findAll();

  if (!products) {
    const error = errorTypes.productsNotFound;

    return { error };
  }

  return { products };
};

const getSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' } });

  return { sellers };
};

const createCheckout = async (saleData) => {
  const { sellerId, deliveryAddress, deliveryNumber, totalPrice, userId } = saleData;
  const saleDate = moment().utc().format();

  const order = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status: 'Pendente',
  });

  return { order };
};

const getOrders = async (userId) => {
  const orders = await Sale
  .findAll({ where: { userId }, attributes: { exclude: ['user_id', 'seller_id'] } });

  return { orders };
};

const getOrderById = async (id) => {
  const order = await Sale
  .findOne({ where: { id }, attributes: { exclude: ['user_id', 'seller_id'] } });

  if (!order) {
    const error = errorTypes.orderNotFound;

    return { error };
  }

  return { order };
};

module.exports = { getProducts, createCheckout, getOrders, getOrderById, getSellers };
