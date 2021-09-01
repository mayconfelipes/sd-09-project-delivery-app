const { Sale, User, SaleProduct, Product } = require('../../database/models');
const { isValidToken } = require('./utils/tokenValidate');

const create = async (authorization, sale) => {
  isValidToken(authorization);
  
  const { products, email, ...newSale } = sale;
  const user = await User.findOne({ where: { email } });
  const userId = user.dataValues.id;
  
  newSale.userId = userId;
  const result = await Sale.create(newSale);
  const saleId = result.dataValues.id;
  
  products.forEach(async ({ productId, quantity }) => SaleProduct.create(
    { saleId, productId, quantity },
  ));
  return { saleId };
};

const findAll = async (authorization) => {
  isValidToken(authorization);
  
  const result = await Sale.findAll({
    attributes: { exclude: ['user_id', 'seller_id'] }, 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      { model: Product, as: 'products', through: { attributes: [] } },
    ],
  });

  return result;
};

module.exports = {
  create,
  findAll,
};
