const { sale, product } = require('../database/models');

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

module.exports = {
  getAllSalesService,
};
