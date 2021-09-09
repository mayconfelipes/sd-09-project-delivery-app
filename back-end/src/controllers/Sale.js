const rescue = require('express-rescue');
const Sale = require('../services/Sale');

const register = rescue(async (req, res) => {
  const { userId, sellerId, deliveryAddress, deliveryNumber, cart } = req.body;
  console.log(req.body);

  const sale = await Sale.register({
    userId,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    cart,
  });

  return res.status(201).json(sale);
});

const update = rescue(async (req, res) => {
  const { id, status } = req.body;

  const sale = await Sale.update({ id, status });

  return res.status(200).json(sale);
});

const findAllByUserId = rescue(async (req, res) => {
  const { userId } = req.params;

  const sale = await Sale.findAllByUserId(userId);

  return res.status(200).json(sale);
});

const findSaleById = rescue(async (req, res) => {
  const { id } = req.params;

  const sale = await Sale.findById(id);
  return res.status(200).json(sale);
});

module.exports = {
  register,
  update,
  findAllByUserId,
  findSaleById,
};
