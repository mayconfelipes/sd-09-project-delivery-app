const vendorsService = require('../services/vendorsService');

const getAllVendors = async (_req, res, next) => {
  const result = await vendorsService.getAllVendorsService();

  if (result.error) {
    return next(result.error);
  }
  return res.status(200).json(result);
};

module.exports = {
  getAllVendors,
};