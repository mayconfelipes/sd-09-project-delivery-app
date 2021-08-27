const productService = require('../services/productService');

const getAllProducts = async (req, res, next) => {
try {
  const products = await productService.getProductsAll();
} catch (error) {
  return next(error);
}
};

module.exports = {
  getAllProducts,
};
