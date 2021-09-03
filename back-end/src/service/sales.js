const { Sale, SalesProduct, Product } = require('../database/models');

const checkoutNewSale = async (data, productCart) => {
  const newSale = await Sale.create(data);
  const products = [];

  productCart.forEach(({ name }) => products.push(Product.findOne({ where: { name } })));

  const productList = await Promise.all(products);

  productList.forEach(({ id }, index) => SalesProduct.create({
    saleId: newSale.id, productId: id, quantity: productCart[index].quantity,
  }));

  return newSale;
};

const getSalesBySellerId = async (id) => {
  const sales = await Sale.findAll({
    where: { sellerId: id },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  });

  return sales;
};

const getSaleProducts = async (id) => {
  const sale = await SalesProduct.findAll({ where: { saleId: id } });
  const products = [];
  const qtds = [];

  sale.forEach(({ productId, quantity }) => {
    products.push(Product.findOne({
      where: { id: productId },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    }));
    qtds.push(quantity);
  });

  const productList = await Promise.all(products);

  return productList.map((item, index) => ({ ...item.dataValues, quantity: qtds[index] }));
};

module.exports = {
  checkoutNewSale,
  getSalesBySellerId,
  getSaleProducts,
};
