const { sales, users } = require('../../database/models');

const getOneOrderById = async (id) => {
  const order = await sales.findOne({ where: { id } });
  return order;
};

const getAllOrdersByCustomerId = async (email) => {
  const userId = await users.findOne({ where: { email } });
  const { id } = userId.dataValues;
  const allOrders = await sales.findAll({ where: { userId: id } });
  return allOrders;
};

module.exports = {
  getOneOrderById,
  getAllOrdersByCustomerId,
};
