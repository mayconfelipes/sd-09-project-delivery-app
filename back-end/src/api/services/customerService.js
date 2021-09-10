const moment = require('moment');

const { Product, Sale, User, salesProduct } = require('../../database/models');

const errorTypes = require('../utils/errorTypes');

const getProducts = async () => {
  const products = await Product.findAll();

  if (!products) {
    const error = errorTypes.productsNotFound;

    return { error };
  }

  return { products };
};

const createCheckout = async (saleData) => {
  const { sellerId, deliveryAddress, deliveryNumber, totalPrice, userId, cart } = saleData;
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

  const { id: saleId } = order.dataValues;

  cart.forEach((product) => {
    salesProduct.create({ saleId, productId: product.id, quantity: product.quantity });
  });

  return { order };
};

const getOrders = async (userId) => {
  const orders = await Sale.findAll({
    where: { userId },
    attributes: { exclude: ['user_id', 'seller_id'] },
    include: [
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  return { orders };
};

const getOrderById = async (id) => {
  const order = await Sale.findOne({
    where: { id },
    attributes: { exclude: ['user_id', 'seller_id'] },
    include: [
      { model: User, as: 'seller', attributes: ['id', 'name'] },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  if (!order) {
    const error = errorTypes.orderNotFound;

    return { error };
  }

  return { order };
};

const changeOrderStatus = async (id, userId, status) => {
  const validStatus = ['Entregue'];
 
  if (!validStatus.includes(status)) {
    const error = errorTypes.invalidStatus;

    return { error };
  }
  const [response] = await Sale.update({ status }, { where: { id, userId } });

  return { response: !!response };
};

module.exports = { getProducts, createCheckout, getOrders, getOrderById, changeOrderStatus };
