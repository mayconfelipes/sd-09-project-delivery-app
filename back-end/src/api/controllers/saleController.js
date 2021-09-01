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
  return res.status(201).json(result);
};

module.exports = {
  create,
  findAll,
};
