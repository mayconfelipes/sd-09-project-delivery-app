const { Sale, SalesProduct, Product } = require('../database/models');

const checkoutNewSale = async (data, productCart) => {
  const newSale = await Sale.create(data);
  const products = [];

  productCart.forEach((item) => products.push(Product.findOne({ where: { name: item.name } })));

  const productList = await Promise.all(products);

  productList.forEach(({ id }, index) => SalesProduct.create({
    saleId: newSale.id, productId: id, quantity: productCart[index].quantity,
  }));

  return newSale;
};

const getByPk = async (id) => await Sale.findByPk(id);

module.exports = {
  checkoutNewSale,
  getByPk,
};
