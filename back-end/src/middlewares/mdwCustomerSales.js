const {
  statusCode: { OK },
} = require('../utils');
const { customerOrder } = require('../services/customerOrders');

const mdwCustomerSales = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const orders = await customerOrder(userId);
    return res.status(OK).json(orders);
  } catch (error) {
    return next(error);
  }
};

module.exports = { mdwCustomerSales };
