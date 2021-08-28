const { user, sale, salesProduct, product } = require('../database/models');

const findByPk = async (id) => {
  const findSale = await sale.findByPk(id, 
    {
      include: [
      { model: user, as: 'user', attributes: { exclude: ['password'] } },
      { model: user, as: 'seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'product', through: { attributes: ['quantity'] } },
    ],
    });
  return findSale;
};

const findAll = async () => {
  const findSales = await sale.findAll({
    include: [
      { model: user, as: 'user', attributes: { exclude: ['password'] } },
      { model: user, as: 'seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'product', through: { attributes: ['quantity'] } },
    ],
  });
  return findSales;
};

const create = async (saleInfo) => {
  const { products } = saleInfo;
  const newSale = await sale.create({
    userId: saleInfo.userId,
    sellerId: saleInfo.sellerId,
    totalPrice: saleInfo.totalPrice,
    deliveryAddress: saleInfo.deliveryAddress,
    deliveryNumber: saleInfo.deliveryNumber,
  });

  await products.forEach((prod) => salesProduct.create({
    saleId: newSale.id,
    productId: prod.id,
    quantity: prod.quantity,
  }));
  return newSale.id;
};

const updateStatus = async ({ saleId, status }) => {
  const selectSale = await sale.findByPk(saleId);
  await selectSale.update({ status });

  return selectSale.status;
};

module.exports = {
  create,
  findByPk,
  findAll,
  updateStatus,
};
