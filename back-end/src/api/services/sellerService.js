const { Product, Sale, User } = require('../../database/models');

const errorTypes = require('../utils/errorTypes');

const getSellers = async () => {
  const sellers = await User.findAll({ where: { role: 'seller' }, attributes: ['id', 'name'] });

  return { sellers };
};

const getOrdersBySellerId = async (sellerId) => {
  const orders = await Sale.findAll({
    where: { sellerId },
    attributes: { exclude: ['user_id', 'seller_id'] },
    include: [
      { model: User, as: 'user', attributes: ['id', 'name'] },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  return { orders };
};

const getOrderById = async (id, sellerId) => {
  const order = await Sale.findOne({
    where: { sellerId, id },
    attributes: { exclude: ['user_id', 'seller_id'] },
    include: [
      { model: User, as: 'user', attributes: ['id', 'name'] },
      { model: Product, as: 'products', through: { attributes: ['quantity'] } },
    ],
  });

  if (!order) {
    const error = errorTypes.orderNotFound;

    return { error };
  }

  return { order };
};

module.exports = { getSellers, getOrdersBySellerId, getOrderById };
