const { Sale } = require('../../database/models');
// const newError = require('../utils/newError');

const getOrders = async (userId) => {
  const userOrders = await Sale.findAll({ where: { userId } });
  return userOrders;
};

module.exports = {
  getOrders,
};
