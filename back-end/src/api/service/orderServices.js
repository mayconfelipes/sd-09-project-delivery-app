const { sale } = require('../../database/models');
const { salesProducts } = require('../../database/models');

const newOrder = async (
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
) => {
  const result = await sale.create({
    user_id: userId,
    seller_id: sellerId,
    total_price: totalPrice,
    delivery_address: deliveryAddress,
    delivery_number: deliveryNumber,
    status,
  });
  return result;
};

const populateSaleProd = async (saleId, products) => {
  const newSaleProd = await salesProducts.bulkCreate(
    products.map(item => ({ sale_id: saleId, product_id: item.id, quantity: item.quantity })),
  );
  return newSaleProd;
};


module.exports = { newOrder, populateSaleProd };
