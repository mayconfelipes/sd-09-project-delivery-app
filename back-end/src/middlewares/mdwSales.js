const {
  statusCode: { OK },
} = require('../utils');
const { sellerOrders, saleDetails } = require('../services/sellerOrders');

const mdwSales = async (req, res, next) => {
  try {
    console.log('Rota /sales/orders');
    const orders = await sellerOrders(1);
    return res.status(OK).json(orders);
  } catch (error) {
    return next(error);
  }
};

const mdwSalesDetails = async (req, res, next) => {
  try {
    console.log('Rota /sales/details');
    const salesAndProducts = await saleDetails();
    return res.status(OK).json(salesAndProducts);
  } catch (error) {
    return next(error);
  }
};

module.exports = { mdwSales, mdwSalesDetails };
