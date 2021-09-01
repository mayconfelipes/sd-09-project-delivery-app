const { sale: Sale, salesProduct: SalesProduct } = require('../models');
const errorHelper = require('../../utils/errorHelper');

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

const checkOut = async ({ sale: saleData, products: productsData }) => {
  const newDataSale = sequelizeDataSale(saleData);
  try {
    const { dataValues: sale } = await Sale.create(newDataSale);
    await saleProductsSave(sale.id, productsData);

    return sale;
  } catch (_error) {
    throw errorHelper(400, '"data" conflict');
  }
};

const saleProductsSave = async (saleId, productsData) => {
  console.log(saleId, productsData);
  productsData.forEach(async ({ productId, quantity }) => {
    const teste = await SalesProduct.create({ sale_id: saleId, product_id: productId, quantity });
    console.log(teste);
  });
};

module.exports = {
  checkOut,
};