const { Sale, SalesProduct, Product, User } = require('../database/models');

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

const getSale = async (id) => {
  const sale = await Sale.findOne({
    where: { id },
    include: [{ model: Product, as: 'products' }],
  });

  const seller = await User.findByPk(sale.sellerId);

  return { sale, seller };
};

module.exports = {
  checkoutNewSale,
  getSale,
};
