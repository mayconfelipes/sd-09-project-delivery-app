const { Op } = require('sequelize');
const { 
  Sale,
  SalesProducts,
  Product,
  User,
} = require('../database/models');

const createSale = async (
  { userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status }) => {
  const newSale = await Sale
    .create({ userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status });

  return newSale.dataValues;
};

const createSaleProduct = async (saleId, productId, quantity) => {
  await SalesProducts.create({ saleId, productId, quantity });
};

const getSalesByUserId = async ({ userId = 0, sellerId = 0 }) => {
  console.log(sellerId);
  const sales = Sale.findAll({
    where: { 
      [Op.or]: [{ userId }, { sellerId }],
    },
  });

  return sales;
};

const getSalesBySaleId = async ({ saleId }) => {
  const sales = Sale.findAll({
    where: { id: saleId },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: User, as: 'seller', attributes: { exclude: 'password' } },
      { model: Product, as: 'product' },
    ],
  });

  return sales;
};

const updateSale = async (id, status) => {
    await Sale.update({ status }, { where: { id } });
    const response = await Sale.findOne({ where: { id } });
    return response;
};

module.exports = {
  createSale,
  createSaleProduct,
  getSalesByUserId,
  getSalesBySaleId,
  updateSale,
};