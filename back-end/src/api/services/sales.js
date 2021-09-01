const Joi = require('joi');

const { Sale, SalesProduct } = require('../../database/models');
const { InvalidArgumentError } = require('../errors');

const STATUS_CHOICES = [
  'Pendente',
  'Preparando',
  'Em trânsito',
  'Entregue',
];

const SaleSchema = Joi.object({
  userId: Joi.number().min(1).required(),
  sellerId: Joi.number().min(1).required(),
  totalPrice: Joi.number().min(1).required(),
  deliveryAddress: Joi.string().required(),
  deliveryNumber: Joi.string().required(),
  status: Joi.string().valid(...STATUS_CHOICES).required(),
  products: Joi.array().items(
    Joi.object({
      id: Joi.number().min(1).required(),
      name: Joi.string().required(),
      price: Joi.number().min(1).required(),
      urlImage: Joi.string().required(),
      quantity: Joi.number().min(1).required(),
    }),
  ).required(),
  saleDate: Joi.date(),
});

const createSalesProductRelationship = (saleId, products) => (
  products.forEach(({ id: productId, quantity }) => (
    SalesProduct.create({ saleId, productId, quantity })
  ))
);

module.exports = {
  async create(payload) {
    const { error } = SaleSchema.validate(payload);

    if (error) throw new InvalidArgumentError(error.message);

    const { products, ...saleData } = payload;

    const sale = await Sale.create(saleData);
    const { id: saleId } = sale.dataValues;

    await createSalesProductRelationship(saleId, products);

    return { id: saleId, ...payload };
  },
};