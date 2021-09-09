const { product } = require('puppeteer');
const { sale } = require('../../database/models');
const { salesProduct } = require('../../database/models');

const newOrder = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
}) => {
  const result = await sale.create({
    user_id: userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  });
  return result;
};

const populateSaleProd = async (saleId, products) => {
  const newSaleProd = await salesProduct.bulkCreate(
    products.map((item) => ({ saleId, productId: item.id, quantity: item.quantity })),
  );
  return newSaleProd;
};

const findOrderById = async (id) => {
  const findIdOrder = await sale.findOne({ where: { id },
    include: {
    model: product,
    as: 'products',
    through: {
      attributes: { exclude: ['sale_id', 'product_id'] },
    },
  } });
  return findIdOrder;
};

module.exports = { newOrder, populateSaleProd, findOrderById };
