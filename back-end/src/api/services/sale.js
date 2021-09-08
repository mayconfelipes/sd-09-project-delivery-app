const { Sale, SalesProduct, User, Product } = require('../../database/models');

const include = [
  { model: User, as: 'user', attributes: { exclude: ['password'] } },
  { model: User, as: 'seller', attributes: { exclude: ['password'] } },
  { model: Product, as: 'products', through: { attributes: ['quantity'] } },
];

const err = (code, message) => ({ code, message });
const saleNotFound = '"sale" not found';

const create = async ({ cart, ...sale }) => {
  const data = await Sale.create(sale);
  cart.forEach(async ({ productId, quantity }) =>
    SalesProduct.create({ saleId: data.id, productId, quantity }));
  return data;
};

const findAll = async () => {
  const data = await Sale.findAll({ include });
  return data;
};

const findOne = async ({ id }) => {
  const data = await Sale.findOne({ where: { id }, include });
  if (!data) throw err('notFound', saleNotFound);
  return data;
};

const update = async (sale, { id }) => {
  const data = await Sale.update(sale, { where: { id } });
  if (!data) throw err('notFound', saleNotFound);
  return data;
};

const destroy = async ({ id }) => {
  const data = await Sale.destroy({ where: { id } });
  if (!data) throw err('notFound', saleNotFound);
  return data;
};

module.exports = { create, findAll, findOne, update, destroy };
