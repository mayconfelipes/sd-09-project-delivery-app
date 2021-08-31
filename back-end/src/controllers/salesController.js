const salesService = require('../services/salesService');

const getAllSalesController = async (req, res, next) => {
  const { payload: { userData: { id, role } } } = req;
  const result = await salesService.getAllSalesService(id, role);
  if (result.error) {
    return next(result.error);
  }
  return res.status(200).json(result);
};

module.exports = {
  getAllSalesController,
};
