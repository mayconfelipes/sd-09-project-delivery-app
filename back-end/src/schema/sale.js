const joi = require('joi');

const cartProduct = joi.object({
  id: joi.number().required(),
  quantity: joi.number().min(1).required(),
});

module.exports = joi.object({
  cart: joi.array().items(cartProduct).required(),
  sellerId: joi.number().required(),
  deliveryAddress: joi.string().required(),
  deliveryNumber: joi.string().required(),
});
