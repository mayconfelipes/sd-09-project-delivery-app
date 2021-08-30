const rescue = require('express-rescue');
const Sale = require('../services/Sale');

const register = rescue(async (req, res) => {
  const { userId, sellerId, deliveryAddress, deliveryNumber, cart } = req.body;

  const sale = await Sale.register({
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    cart,
  });

  return res.status(201).json(sale);
});

module.exports = {
  register,
};