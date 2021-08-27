const RepositorySales = require('../repositories/RepositorySales');
const RepositoryUsers = require('../repositories/RepositoryUsers');

const sale = async ({ userId, totalPrice, deliveryNumber, deliveryAddress, name }) => {
  const status = 'pendente';

  const findedSeller = await RepositoryUsers.getByName({ name });
  const { id: sellerId } = findedSeller;

  const newSale = await RepositorySales
    .createSale({ userId, sellerId, totalPrice, deliveryNumber, deliveryAddress, status });

  return newSale;
};

module.exports = {
  sale,
};