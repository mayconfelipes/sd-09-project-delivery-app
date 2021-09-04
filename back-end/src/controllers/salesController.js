const salesService = require('../services/salesService');

const getSaleById = async (req, res, _next) => {
  const { id } = req.params;

  const result = await salesService.getSaleById(id);

  res.status(200).json(result);
};

const getSaleItems = async (req, res, _next) => {
  const { id } = req.params;

  const result = await salesService.getSaleItems(id);

  res.status(200).json(result);
};

const getAllSalesController = async (req, res, next) => {
  const { payload: { userData: { id, role } } } = req;
  const result = await salesService.getAllSalesService(id, role);
  if (result.error) {
    return next(result.error);
  }
  return res.status(200).json(result);
};

const changeOrderStatus = async (req, res, _next) => {
  const { id } = req.params;
  const { status } = req.body;

  await salesService.changeOrderStatus({ id, status });

  res.status(200).end();
};

module.exports = {
  getAllSalesController,
  getSaleById,
  getSaleItems,
  changeOrderStatus,
};
