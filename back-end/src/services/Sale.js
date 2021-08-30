/* eslint-disable camelcase */
/* eslint-disable max-lines-per-function */
const Joi = require('joi');
const { generateError } = require('../../schemas');
const { Sale, SaleProduct } = require('../database/models');
const Product = require('./Product');

const RegisterSchema = Joi.object({
  userId: Joi.number().required(),
  sellerId: Joi.number().required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  cart: Joi.array().required(),
});

const calculateTotalPrice = (cart) => {
  const totalPrice = cart
    .reduce(async (acc, { productId, quantity }) => {
      const newAcc = await acc;
      const product = await Product.findById(productId);

      return newAcc + (product.dataValues.price * quantity);
    }, 0);
    
  return totalPrice;
};

const seedSalesProducts = (saleId, cart) => {
  cart.forEach(({ productId, quantity }) => {
    SaleProduct.create({
      saleId,
      productId,
      quantity,
    });
  });
};

const register = async (saleInfo) => {
  const { error } = RegisterSchema.validate(saleInfo);

  if (error) throw generateError(422, error.message);

  const { userId, sellerId, deliveryAddress, deliveryNumber, cart } = saleInfo;
  const totalPrice = await calculateTotalPrice(cart);

  const sale = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });

  seedSalesProducts(sale.id, cart);

  return { sale: sale.dataValues };
};

module.exports = {
  register,
};