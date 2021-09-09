const rescue = require('express-rescue');
const Sale = require('../services/SaleService');

const checkOut = rescue(async (req, res) => {
  const { body, payload } = req;
  const sale = await Sale.checkOut(body, payload.id);

  return res.status(201).json({ id: sale});
});

const allSales = rescue(async (req, res) => {
  const { payload: { id } } = req;
  const sales = await Sale.allSalesBySellerId(id);
  return res.status(201).json(sales);
});

const allPurchases = rescue(async (req, res) => {
  const { payload: { id } } = req;
  const purchases = await Sale.allPurchases(id);
  return res.status(201).json(purchases);
});

const getOrderById = rescue(async (req, res) => {
  const { id } = req.params;
  const order = await Sale.getOrderById(id);

  return res.status(200).json(order);
})

module.exports = {
  checkOut,
  allSales,
  allPurchases,
  getOrderById,
};
