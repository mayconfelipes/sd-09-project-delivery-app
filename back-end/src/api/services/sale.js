const { Sale, SalesProduct } = require('../../database/models');
const error = require('../utils/generateError');

// const include = [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
//   { model: Category, as: 'categories', through: { attributes: [] } }];

const saleNotFound = '"sale" not found';

const create = async ({ productId, quantity, ...sale }) => {
  const data = await Sale.create(sale);
  const saleId = data.id;
  await SalesProduct.create({ saleId, productId, quantity });
  return data;
};

const findAll = async () => {
  const data = await Sale.findAll();
  return data;
};

const findOne = async ({ id }) => {
  const data = await Sale.findOne({ where: { id } });
  if (!data) throw error('notFound', saleNotFound);
  return data;
};

const update = async (sale, { id }) => {
  const data = await Sale.update(sale, { where: { id } });
  if (!data) throw error('notFound', saleNotFound);
  return data;
};

const destroy = async ({ id }) => {
  const data = await Sale.destroy({ where: { id } });
  if (!data) throw error('notFound', saleNotFound);
  return data;
};

const findBySeller = async ({ id }) => {
  const data = await Sale.findAll({ where: { sellerId: id } });

  return data;
};

module.exports = { create, findAll, findOne, update, destroy, findBySeller };
