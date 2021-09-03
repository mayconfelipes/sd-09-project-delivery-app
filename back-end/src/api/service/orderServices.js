const { sale } = require('../../database/models');

const newOrder = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  status,
}) => {
  const result = await ({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status
  });

  return result;
};

module.exports = { newOrder };
