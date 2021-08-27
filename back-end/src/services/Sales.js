const { sales } = require('../database/models');

const createSale = async (body) => {
  const { dataValues } = await sales.create({ ...body });

  return dataValues;
};

const getAll = async () => {
  const allSale = await sales.findAll();

  return allSale;
};

const getById = async (id) => {
  const sale = await sales.findOne({ where: { id } });

  if (!sale) return { code: 404, message: 'Sale does not exist' };

  return sale.dataValues;
};

const updateSale = async (id, body) => {
  const sale = await sales.findOne({ where: { id } });

  if (!sale) return { code: 404, message: 'Sale does not exist' };

  await sales.update({ ...body }, { where: { id } });

  const editSale = await sales.findOne({ where: { id } });

  return editSale;
};

module.exports = {
  createSale,
  getAll,
  getById,
  updateSale,
};
