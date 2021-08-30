const Sales = require('../services/Sales');

const createSale = async (req, res) => {
  const { body } = req;

  const newSale = await Sales.createSale({ ...body });

  return res.status(201).json(newSale);
};

const getAll = async (_req, res) => {
  const getAllSales = await Sales.getAll();

  return res.status(200).json(getAllSales);
};

const getById = async (req, res, next) => {
  const { id } = req.params;

  const getSale = await Sales.getById(id);
  
  if (getSale.code) return next(getSale);

  return res.status(200).json(getSale);
};

const updateSale = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;

  const editSale = await Sales.updateSale(id, { ...body });

  if (editSale.code) return next(editSale);

  return res.status(200).json(editSale);
};

module.exports = {
  createSale,
  getAll,
  getById,
  updateSale,
};
