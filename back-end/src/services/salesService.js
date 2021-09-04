const { sale, product, user } = require('../database/models');

const getAllSalesService = async (id, userRole) => {
  const userId = (userRole === 'seller' ? 'seller_id' : 'user_id');
  try {
    const result = await sale.findAll({
      where: { [userId]: id },
      include: [{
        model: product, as: 'products', through: { attributes: ['quantity'] },
      }],
    });
    return result;
  } catch (error) {
    return { error };
  }
};

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
    { model: product, as: 'products', through: { attributes: ['quantity'] } },
  ],
  });
  return result;
};

const changeOrderStatus = async ({ id, status }) => {
  await sale.update({ status }, { where: { id } });
};

module.exports = {
  getAllSalesService,
  getSaleById,
  getSaleItems,
  changeOrderStatus,
};
