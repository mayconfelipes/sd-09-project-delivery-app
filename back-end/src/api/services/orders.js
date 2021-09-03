const { sales } = require('../../database/models');

const getOneOrderById = async (id) => {
  const order = await sales.findOne({ where: { id } });
  return order;
};

const getAllOrdersByCustomerId = async (id) => {
  const allOrders = await sales.findAll({ where: { userId: id } });
  return allOrders;
};

module.exports = {
  getOneOrderById,
  getAllOrdersByCustomerId,
};
