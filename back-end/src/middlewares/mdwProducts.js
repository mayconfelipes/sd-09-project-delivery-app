const ProductsService = require('../services/products');
const errorObj = require('../utils/errorObj');
const statusCode = require('../utils/statusCode');

const findAllProducts = async (_req, res, next) => {
  try {
    const dataProducts = await ProductsService.findAllProducts();
    if (!dataProducts) throw errorObj('Products database is empty', statusCode.notFound);
    res.status(200).json(dataProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  findAllProducts,
};