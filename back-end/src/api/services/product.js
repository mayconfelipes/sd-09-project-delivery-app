const { Product } = require('../../database/models');
const generateError = require('../utils/generateError');

const notFoundMessage = '"product" not found';

const create = async (product) => {
  const data = await Product.create(product);
  return data;
};

const findAll = async () => {
  const data = await Product.findAll();
  return data;
};

const findOne = async ({ id }) => {
  const data = await Product.findOne({ where: { id } });
  if (!data) throw generateError('notFound', notFoundMessage);
  return data;
};

const update = async (product, { id }) => {
  const data = await Product.update(product, { where: { id } });
  if (!data) throw generateError('notFound', notFoundMessage);
  return data;
};

const destroy = async ({ id }) => {
  const data = await Product.destroy({ where: { id } });
  if (!data) throw generateError('notFound', notFoundMessage);
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
