const { sale } = require('../../database/models');
const { salesProducts } = require('../../database/models');

const newOrder = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
}) => {
  const result = await sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
  });
  return result;
};

const populateSaleProd = async (saleId, products) => {
  const newSaleProd = await salesProducts.bulkCreate(
    products.map((item) => ({ sale_id: saleId, product_id: item.id, quantity: item.quantity })),
  );
  return newSaleProd;
};

const findOrderById = async (id) => {
  const findIdOrder = await sale.findOne({ where: { id } });
  return findIdOrder;
};

module.exports = { newOrder, populateSaleProd, findOrderById };
