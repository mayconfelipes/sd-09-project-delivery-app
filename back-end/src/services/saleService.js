const { sale, user, product } = require('../database/models');

const getSaleById = async (id) => {
  const result = await sale
    .findOne({ where: { id },
    include: [
      { model: user, as: 'user', attributes: { exclude: 'password' } },
      { model: user, as: 'seller', attributes: { exclude: 'password' } },
    ],
      raw: true });
  return result;
};

const getSaleItems = async (id) => {
  const result = await sale.findOne({ where: { id },
  include: [
    // { model: salesProducts, as: 'salesProducts' },
    { model: product, as: 'products', through: { attributes: ['quantity'] } },
  ],
  });
  return result;
};

module.exports = {
  getSaleById,
  getSaleItems,
};
