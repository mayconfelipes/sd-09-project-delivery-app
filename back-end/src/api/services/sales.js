const { sale, sequelize } = require('../database/models');
const schemaForSale = require('../schemas/sale');

const createSale = async (saleData, userId) => {
  const { error } = schemaForSale.validate(saleData);
  if (error) throw error;

  const { sellerId, cart, deliveryAddress, deliveryNumber } = saleData;
  const totalPrice = await getTotalPrice(cart);

  return sequelize.transaction(async (transaction) => {
    const newSale = await sale.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status: 'Pendente',
    }, { transaction });

    await Promise.all(cart.map(({ id: productId, quantity }) => (
      newSale.addProduct(productId, { through: { quantity }, transaction }))));
    
    return newSale.id;
  });
};

const updateSale = async (id, status) => {
  try {
    await sale.update({ status }, { where: { id } });
    const response = await sale.findOne({ where: { id } });
    return response;
  } catch (err) {
    console.log(err);
  }
};

const getDetailedSale = async (id) => (
  sale.findByPk(id, {
    attributes: ['id', 'totalPrice', 'status', 'saleDate'],
    include: [
      {
        association: 'seller',
        attributes: ['name'],
      },
      {
        association: 'products',
        attributes: ['id', 'name', 'price'],
        through: { attributes: ['quantity'] },
      },
    ],
  })
);

module.exports = {
  createSale,
  updateSale,
  getDetailedSale,
};
