const path = require('path');
const productsService = require('../services/productsService');

const getAll = async (_req, res) => {
  const products = await productsService.getAll();
  return res.status(200).json(products);
};

const getImage = (req, res) => {
  const imgPathReceived = req.url;
  const pathImage = path.resolve(`public/${imgPathReceived}`);
  return res.status(200).sendFile(pathImage);
};

module.exports = {
  getAll,
  getImage,
};
