const { Products } = require('../../database/models');

const products = async (_req, res) => {
  const allProducts = await Products.findAll();
  res.status(200).json(allProducts);
};

module.exports = { products };
