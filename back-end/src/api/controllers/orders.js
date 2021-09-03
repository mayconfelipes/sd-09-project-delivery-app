const ordersService = require('../services/orders');

const getOneOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await ordersService.getOneOrderById(id)
  return res.status(200).json(order)
};

const getAllOrdersByCustomerId = async (req, res) => {
  const { id } = req.body;
  const allOrders = await ordersService.getAllOrdersByCustomerId(id);
  return res.status(200).json(allOrders);
};

module.exports = {
  getOneOrderById,
  getAllOrdersByCustomerId,
};