// Controller para leitura dos produtos - todos os produtos (getAll)
// e por identificação no paramentro na Url(getById).
const rescue = require('express-rescue');
const { getAllProducts, getProductById } = require('../service/productsServices');

const getAllP = rescue(async (_req, res) => {
  const result = await getAllProducts();
  return res.status(200).json(result);
});

const getPById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await getProductById(id);
  return res.status(200).json({ products: result });
});

module.exports = { getAllP, getPById };
