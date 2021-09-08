const rescue = require('express-rescue');
const sellerServices = require('../service/SellerServices');

const HTTP_STATUS_OK = 200;

const getAllOrders = rescue(async (req, res) => {
  const { email } = req.params;
  
  const orders = await sellerServices.getAll(email);

  return res.status(HTTP_STATUS_OK).json(orders);
});

module.exports = {
  getAllOrders,
};
