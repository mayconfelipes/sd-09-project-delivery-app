const Sale = require('../services/sales');

const newOrder = async (req, res, next) => {
  try {
    const order = req.body;
    const { id: userId } = req.user;
    order['userId'] = userId;
    const registeredOrder = await Sale.newOrder(order);
    return res.status(201).json(registeredOrder);
  } catch (err) { next(err); }
};

const getOrderById = async (req, res, next) => {
  try {
    const orderById = await Sale.getOrderById(req.params.orderId);
    return res.status(200).json(orderById);
  } catch (err) { next(err); }
};

const getAllOrders = async (req, res, next) => {
  try {
    const { id } = req.user;
    const allOrders = await Sale.getAllOrders(id);
    return res.status(200).json(allOrders);
  } catch (err) { next(err); }
};

const getAllSales = async (req, res, next) => {
  try {
    const allSales = await Sale.getAllSales(req.body.sellerId);
    return res.status(200).json(allSales);
  } catch (err) { next(err); }
};

const updateOrderStatus = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const updatedOrder = await Sale.updateOrderStatus(orderId, status);
    return res.status(200).json(updatedOrder);
  } catch (err) { next(err); }
};

module.exports = {
  newOrder,
  getOrderById,
  getAllOrders,
  getAllSales,
  updateOrderStatus,
};
