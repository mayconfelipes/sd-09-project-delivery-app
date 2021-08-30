const productsService = require('../services/Products');

const OK_STATUS = 200;

const getAllProducts = (req, res) => productsService.getAll()
  .then((data) => res.status(OK_STATUS).json(data));

module.exports = {
  getAllProducts,
};
