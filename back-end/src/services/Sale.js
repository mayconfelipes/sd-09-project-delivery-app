const Joi = require('joi');
const { Sale, SaleProduct, Product } = require('../database/models');
const { seedSalesProducts, calculateTotalPrice, generateError } = require('../../schemas');

const RegisterSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  cart: Joi.array().required(),
});

const UpdateSchema = Joi.object({
  id: Joi.number().required(),
  status: Joi.string().required(),
});

const findById = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [{ model: Product, as: 'product', through: { attributes: ['quantity'] } }],
  });
  console.log(sale.dataValues);
  return sale.dataValues;
};

const register = async (saleInfo) => {
  const { error } = RegisterSchema.validate(saleInfo);

  if (error) throw generateError(422, error.message);

  const { userId, sellerId, deliveryAddress, deliveryNumber, cart } = saleInfo;
  const totalPrice = await calculateTotalPrice(Product, cart);
  console.log(totalPrice);
  const sale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });
  console.log(sale.dataValues);

  seedSalesProducts(SaleProduct, sale.id, cart);

  return { sale: sale.dataValues };
};

const update = async ({ id, status }) => {
  const { error } = UpdateSchema.validate({ id, status });

  if (error) throw generateError(422, error.message);

  await Sale.update({ status }, { where: { id } });

  const sale = await findById(id);

  return {
    sale,
  };
};

const findAllByUserId = async (userId) => {
  const sale = await Sale.findAll({ where: { userId } });

  if (!sale) throw generateError(404, 'Venda não encontrada');

  return {
    sale,
  };
};

module.exports = {
  register,
  update,
  findAllByUserId,
  findById,
};
