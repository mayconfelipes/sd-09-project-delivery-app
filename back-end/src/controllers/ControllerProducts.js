const ServiceProducts = require('../services/ServiceProducts');

const getAllProducts = async (_req, res, next) => {
  try {
    const products = await ServiceProducts.getAllProducts();

    return res.status(200).json({ products });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllProducts,
};