const { sales } = require('../database/models');

const customerOrder = async (userId) => {
  const orders = await sales.findAll({ where: { userId } });
  return orders;
};

module.exports = {
  customerOrder,
};
