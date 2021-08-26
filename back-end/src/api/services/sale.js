const { Sale } = require('../../database/models');

const create = async (sale) => {
  const data = await Sale.create(sale);
  return data;
};

const findAll = async () => {
  const data = await Sale.findAll();
  return data;
};

const findOne =  async ({ id }) => {
  const data = await Sale.findOne({ id });
  return data;
};

const update =  async (sale, { id }) => {
  const data = await Sale.update(sale, { where: { id } });
  return data;
};

const destroy = async ({ id }) => {
  const data = await Sale.destroy({ id });
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
