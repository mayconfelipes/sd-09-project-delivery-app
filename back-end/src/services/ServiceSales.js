const RepositorySales = require('../repositories/RepositorySales');
const RepositoryUsers = require('../repositories/RepositoryUsers');

const sale = async ({ userId, totalPrice, deliveryNumber, deliveryAddress, name, products }) => {
  const status = 'pendente';

  const findedSeller = await RepositoryUsers.getByName({ name });
  const { id: sellerId } = findedSeller;

  const newSale = await RepositorySales
    .createSale({ userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status });

  products.forEach(({ id: productId, quantity }) => {
    RepositorySales.createSaleProduct(newSale.id, productId, quantity);
  });

  return newSale;
};

const getSalesByUserId = async ({ userId, sellerId }) => {
  const sales = await RepositorySales.getSalesByUserId({ userId, sellerId });

  return sales;
};

const getSalesBySaleId = async ({ saleId }) => {
  const sales = await RepositorySales.getSalesBySaleId({ saleId });

  return sales;
};

module.exports = {
  sale,
  getSalesBySaleId,
  getSalesByUserId,
};