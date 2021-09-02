const { Sale } = require('../models');
const erroHelper = require('../../utils/errorHelper');

const sequelizeDataSale = (data) => {
  const newData = {
    user_id: data.userId,
    seller_id: data.sellerId,
    total_price: data.totalPrice,
    delivery_address: data.deliveryAddress,
    delivery_number: data.deliveryNumber,
    sale_date: data.saleDate,
    status: data.status,
  };

  return newData;
};

const checkOut = async (data) => {
  const newData = sequelizeDataSale(data);

  try {
    const { dataValues: sale } = await Sale.create(newData);

    return sale;
  } catch (_error) {
    throw erroHelper(400, '"data" conflict');
  }
};

module.exports = {
  checkOut,
};