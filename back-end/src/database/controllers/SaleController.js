const Sale = require('../services/SaleService');

const checkOut = async (req, res) => {
  const { body, payload } = req;
  const sale = await Sale.checkOut(body, payload.id);

  return res.status(201).json({ id: sale});
};

module.exports = {
  checkOut,
};
