const sales = require('../services/sales');

const getAll = async (req, res) => {
  const allSales = await sales.getAll();
  res.status(201).send(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const allSales = await sales.getById(id);
  res.status(201).send(allSales);
};

module.exports = {
  getAll,
  getById,
};
