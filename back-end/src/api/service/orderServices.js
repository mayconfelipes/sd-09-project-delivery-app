const { sale } = require('../../database/models');

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

module.exports = { newOrder };
