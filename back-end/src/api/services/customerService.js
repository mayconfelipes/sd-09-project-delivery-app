const { Product, Sale, User } = require('../../database/models');
const sale = require('../../database/models/sale');

const errorTypes = require('../utils/errorTypes');

const getProducts = async () => {
  const products = await Product.findAll();

  if (!products) {
    const error = errorTypes.productsNotFound;

    return { error };
  }

  return { products };
};

const createCheckOut = async (dataBody) => {
  const { seller, id } = dataBody;
  const sellerBy = await User.getById(seller);

  const saleNew = await Sale.create({
    userId: id,
    // sellerId: saleSeller.id,
    totalPrice: sale.totalPrice,
    deliveryAddress: sale.deliveryAddress,
    deliveryNumber: sale.deliveryNumber,
    status: 'Pendente',
    sellerBy,
  });

  return saleNew;
};

const getOrders = async (userId) => {
  const orders = await Sale.findAll({ where: { userId } });

  return { orders };
};

const getOrderById = async (id) => {
  const order = await Sale.findByPk(id);

  if (!order) {
    const error = errorTypes.orderNotFound;

    return { error };
  }

  return { order };
};

module.exports = { getProducts, createCheckOut, getOrders, getOrderById };
