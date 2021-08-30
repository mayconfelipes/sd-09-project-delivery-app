const sales = require('../services/saleService');

const create = async (req, res) => {
  const { authorization } = req.headers;
  // const {  } = req.body; em desenvolvimento
  const result = await sales.create(authorization, {});
  return res.status(201).json(result);
};

module.exports = {
  create,
};
