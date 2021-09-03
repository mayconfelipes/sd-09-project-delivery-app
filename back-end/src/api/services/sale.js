const { Sale, SalesProduct, User, Product } = require('../../database/models');
const error = require('../utils/generateError');

const include = [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: User, as: 'seller', attributes: { exclude: ['password'] } },
  { model: Product, as: 'products', through: { attributes: ['quantity'] } },
];

const saleNotFound = '"sale" not found';

const create = async ({ cart, ...sale }) => {
  const data = await Sale.create(sale);
  const saleId = data.id;
  cart.forEach(async ({ productId, quantity }) =>
    SalesProduct.create({ saleId, productId, quantity }));
  return data;
};

const findAll = async () => {
  const data = await Sale.findAll({ include });
  return data;
};

const findOne = async ({ id }) => {
  const data = await Sale.findOne({ where: { id }, include });
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
  const data = await Sale.findAll({ where: { sellerId: id }, include });
  return data;
};

module.exports = { create, findAll, findOne, update, destroy, findBySeller };
