const { sale: Sale, salesProduct: SalesProduct } = require('../models');
const errorHelper = require('../../utils/errorHelper');

const sequelizeDataSale = (data, userId) => {
  const newData = {
    user_id: userId,
    seller_id: data.sellerId,
    total_price: data.totalPrice,
    delivery_address: data.deliveryAddress,
    delivery_number: data.deliveryNumber,
    sale_date: new Date(),
    status: 'Pendente',
  };

  return newData;
};

const checkOut = async (saleObject, id) => {
  const { sale: saleData, products: productsData } = saleObject;

  const newDataSale = sequelizeDataSale(saleData, id);
  try {
    const { dataValues: sale } = await Sale.create(newDataSale);
    await saleProductsSave(sale.id, productsData);

    return sale.id;
  } catch (_error) {
    throw errorHelper(400, '"data" conflict');
  }
};

const saleProductsSave = async (saleId, productsData) => {
  console.log(productsData);
  productsData.forEach(async ({ productId, quantity }) => {
    await SalesProduct.create({ sale_id: saleId, product_id: productId, quantity });
  });
};

const allSalesBySellerId = async (id) => {
  try {
    const allSales = await Sale.findAll({
      where: { seller_id: id },
    });
    return allSales;
  } catch (_error) {
    throw errorHelper(409, '"data" conflict');
  }
};

const allPurchasesByCostumerId = async (id) => {
  try {
    const allPurchases = await Sale.findAll({
      where: { user_id: id },
    });
    return allPurchases;
  } catch (_error) {
    throw errorHelper(409, '"data" conflict');
  }
};

module.exports = {
  checkOut,
  allSalesBySellerId,
  allPurchasesByCostumerId,
  orderById,
};
