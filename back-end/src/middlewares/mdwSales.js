const {
  statusCode: { OK },
} = require('../utils');
const { sellerOrders, saleDetails } = require('../services/sellerOrders');
// const { createSale } = require('../services/createSale');

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

// const mdwCreateSale = async (req, res, next) => {
//   try {
    // const { sellerId, userId, totalPrice, deliveryNumber, deliveryAddress } = req.body;
    // const status = 'pendente';
    // const createdSale = await createSale({sellerId, userId, totalPrice, deliveryNumber, deliveryAddress})
  // } catch (error) {
  //   return next(error);
//   }
// };

module.exports = { mdwSales, mdwSalesDetails };
