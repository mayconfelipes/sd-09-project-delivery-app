const salesProductsService = require('../services/salesProducts');

const getAll = async (req, res) => {
  const allSales = await salesProductsService.getAll();
 res.status(201).send(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await salesProductsService.getById(id);
  return res.status(201).send(sale);
};

module.exports = {
  getById,
  getAll,
};