const { Product } = require('../../database/models');

const create = async (product) => {
  const data = await Product.create(product);
  return data;
};

const findAll = async () => {
  const data = await Product.findAll();
  return data;
};

const findOne =  async ({ id }) => {
  const data = await Product.findOne({ id });
  return data;
};

const update =  async (product, { id }) => {
  const data = await Product.update(product, { where: { id } });
  return data;
};

const destroy = async ({ id }) => {
  const data = await Product.destroy({ id });
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
