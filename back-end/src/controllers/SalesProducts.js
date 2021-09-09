const SalesProducts = require('../services/SalesProducts');

// const createSaleProduct = async (req, res) => {
//   const { body } = req;

//   const newSaleProduct = await SalesProducts.createSaleProduct({ ...body });

//   return res.status(201).json(newSaleProduct);
// };

const getAll = async (_req, res) => {
  const getAllSalesProducts = await SalesProducts.getAll();

  return res.status(200).json(getAllSalesProducts);
};

module.exports = {
  // createSaleProduct,
  getAll,
};
