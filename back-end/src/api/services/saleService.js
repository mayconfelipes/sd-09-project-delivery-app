const moment = require('moment');
const { Sale, User, SaleProduct } = require('../../database/models');
const { isValidToken } = require('./utils/tokenValidate');

const PENDENTE = 'pendente';

const create = async (authorization, sale) => {
  isValidToken(authorization);
  
  const { products, email, ...newSale } = sale;
  const user = await User.findOne({ where: { email } });
  const userId = user.dataValues.id;

  newSale.userId = userId;
  newSale.saleDate = moment().format();
  newSale.status = PENDENTE;

  const result = await Sale.create(newSale);
  const saleId = result.dataValues.id;
  
  products.forEach(async ({ productId, quantity }) => SaleProduct.create(
    { saleId, productId, quantity },
  ));
  return { saleId };
};

module.exports = {
  create,
};
