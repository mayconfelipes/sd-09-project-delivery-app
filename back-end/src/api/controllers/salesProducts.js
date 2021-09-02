const salesProductsService = require('../services/salesProducts');

const getAll = async (req, res) => {
  const allSales = await salesProductsService.getAll();
 res.status(201).send(allSales);
};

module.exports = {
  getAll,
};