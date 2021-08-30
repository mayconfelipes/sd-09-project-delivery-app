const saleService = require('../services/saleService');

const getSaleById = async (req, res, _next) => {
  const { id } = req.params;

  const result = await saleService.getSaleById(id);

  res.status(200).json(result);
};

const getSaleItems = async (req, res, _next) => {
  const { id } = req.params;

  const result = await saleService.getSaleItems(id);

  res.status(200).json(result);
};

module.exports = {
  getSaleById,
  getSaleItems,
};
