const Sale = require('../services/SaleService');

const checkOut = async (req, res) => {
  const sale = await Sale.checkOut(req.body);

  return res.status(201).json(sale);
};

module.exports = {
  checkOut,
};
