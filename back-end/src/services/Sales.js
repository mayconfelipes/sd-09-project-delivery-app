const { Sales } = require('../database/models');

const createSale = async (body) => {
  const { dataValues } = await Sales.create({ ...body });

  return dataValues;
};

const getAll = async () => {
  const allSale = await Sales.findAll();

  return allSale;
};

const getById = async (id) => {
  const sale = await Sales.findOne({ where: { id } });

  if (!sale) return { code: 404, message: 'Sale does not exist' };

  return sale.dataValues;
};

const updateSale = async (id, body) => {
  const sale = await Sales.findOne({ where: { id } });

  if (!sale) return { code: 404, message: 'Sale does not exist' };

  await Sales.update({ ...body }, { where: { id } });

  const editSale = await Sales.findOne({ where: { id } });

  return editSale;
};

const deleteSale = async (id) => {
  await Sales.destroy({ where: { id } });
};

module.exports = {
  createSale,
  getAll,
  getById,
  updateSale,
  deleteSale,
};
