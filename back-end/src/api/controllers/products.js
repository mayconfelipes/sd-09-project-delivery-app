const Product = require('../services/products');

const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Product.getAllProducts();
    return res.status(200).json(allProducts);
  } catch (err) { next(err); }
};

module.exports = {
  getAllProducts,
};
