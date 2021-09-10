const rescue = require('express-rescue');
const { SaleProduct, Sale, Product } = require('../database/models');

const findAll = rescue(async (_req, res) => {
  const salesProducts = await SaleProduct.findAll(
    { include: [{ model: Sale, as: 'sale', attributes: [] },
    { model: Product, as: 'products', through: { attributes: [] } }] },
  );
  
  res.status(200).json(salesProducts);
});
  
const findByPk = rescue(async (req, res) => {
  const { id } = req.params;

  const saleProduct = await SaleProduct.findByPk(id,
    { include: [{ model: Sale, as: 'sale', attributes: [] },
    { model: Product, as: 'products', through: { attributes: [] } }] });

  if (saleProduct === null) return res.status(404).json({ message: 'Sale does not exist' });

  return res.status(200).json(saleProduct);
});

module.exports = {
  findAll,
  findByPk,
};
