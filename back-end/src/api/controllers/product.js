const productService = require('../services/products');

const getAllProducts = async (req, res) => {
  const allProducts = await productService.getAllProducts();
  return res.status(200).json(allProducts);
};

module.exports = {
  getAllProducts,
};