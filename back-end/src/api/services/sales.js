const { Sale } = require('../../database/models');
// const newError = require('../utils/newError');

const getOrders = async () => {
  const userOrders = await Sale.findAll();
  return userOrders;
};

module.exports = {
  getOrders,
};
