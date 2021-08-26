const Sale = require('../services/SaleService');

const getAll = async (_req, res) => {
  const sales = await Sale.getAll();

  return res.status(200).json(sales);
};

module.exports = {
  getAll,
};