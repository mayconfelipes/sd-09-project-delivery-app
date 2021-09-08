const Joi = require('joi');

const { User, Sale, SalesProduct, Product } = require('../../database/models');
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

const retriveSaleSerializer = async (sale) => {
  const salesProducts = await SalesProduct.findAll({ where: { saleId: sale.id } })
  .then((response) => response.map(({ dataValues }) => dataValues));
  const allProducts = await Product.findAll()
    .then((result) => result.map(({ dataValues }) => dataValues));

  const products = salesProducts.map(({ productId, quantity }) => {
    const product = allProducts.find(({ id }) => id === productId);
    return { ...product, quantity };
  });
  const { dataValues: seller } = await User.findOne({ where: { id: sale.sellerId } });
  const { dataValues: user } = await User.findOne({ where: { id: sale.userId } });

  return { ...sale, products, seller, user };
};

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
  async getAll(userId, role) {
    if (role === 'customer') {
      return Sale.findAll({ where: { userId } });
    }

    return Sale.findAll({ where: { sellerId: userId } });
  },
  async getById(id) {
    const { dataValues: sale } = await Sale.findOne({ where: { id } });

    return retriveSaleSerializer(sale);
  },
};