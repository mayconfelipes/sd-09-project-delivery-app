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
      sale_id: saleId,
      product_id: productId,
      quantity,
    });
  });
};

const register = async (saleInfo) => {
  const { error } = RegisterSchema.validate(saleInfo);

  if (error) throw generateError(422, error.message);

  const { userId, sellerId, deliveryAddress, deliveryNumber, cart } = saleInfo;
  const totalPrice = await calculateTotalPrice(cart);

  const sale = await Sale.create({ user_id: userId,
    seller_id: sellerId,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    status: 'Pendente',
  });

  seedSalesProducts(sale.id, cart);
  
  return {
    id: sale.id,
    userId: sale.user_id,
    sellerId: sale.seller_id,
    totalPrice: sale.total_price,
    deliveryAddress: sale.delivery_address,
    deliveryNumber: sale.delivery_number,
    status: sale.status,
    saleDate: sale.sale_date,
  };
};

module.exports = {
  register,
};