const sellerService = require('../services/sellerService');

const allSellers = async (_req, res, _next) => {
  const sellers = await sellerService.seller();
  return res.status(200).json(sellers);
};

module.exports = {
  allSellers,
};
