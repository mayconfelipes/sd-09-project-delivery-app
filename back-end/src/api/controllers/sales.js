const sales = require('../services/sales');

const getAll = async (req, res) => {
  const allSales = await sales.getAll();
  return res.status(201).send(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const allSales = await sales.getById(id);
  return res.status(201).send(allSales);
};

const registerSale = async (req, res) => {
  const { address, addressNumber, sellerId, totalPrice, userEmail, cartItens, saleDate } = req.body.data;
  const newSaleId = await sales
    .registerSale({ address, addressNumber, sellerId, totalPrice, userEmail, cartItens, saleDate });
  return res.status(201).json(newSaleId);
};

module.exports = {
  getAll,
  getById,
  registerSale,
};
