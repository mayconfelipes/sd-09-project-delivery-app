const sales = require('../services/saleService');

const create = async (req, res) => {
  const { authorization } = req.headers;
  const sale = req.body;
  const result = await sales.create(authorization, sale);
  return res.status(201).json(result);
};

const findAll = async (req, res) => {
  const { authorization } = req.headers;
  const result = await sales.findAll(authorization);
  return res.status(200).json(result);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const result = await sales.findById(id, authorization);
  return res.status(200).json(result);
};

module.exports = {
  create,
  findAll,
  findById,
};
