const {
  statusCode: { OK },
} = require('../utils');
const { sellerOrders, saleDetails } = require('../services/sellerOrders');

const mdwSales = async (req, res, next) => {
  try {
    const { sellerId } = req.body;
    const orders = await sellerOrders(sellerId);
    return res.status(OK).json(orders);
  } catch (error) {
    return next(error);
  }
};

const mdwSalesDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const salesAndProducts = await saleDetails(id);
    return res.status(OK).json(salesAndProducts);
  } catch (error) {
    return next(error);
  }
};

module.exports = { mdwSales, mdwSalesDetails };
