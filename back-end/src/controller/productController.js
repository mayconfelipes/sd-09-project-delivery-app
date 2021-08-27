const productService = require('../service/productService');

const getProducts = async (_req, res, next) => {
  try {
    const serviceResponse = await productService.getProducts();
    if (serviceResponse.status) {
      return next({
        status: serviceResponse.status,
        message: serviceResponse.message,
      });
    }
    return res.status(200).json(serviceResponse);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getProducts,
};