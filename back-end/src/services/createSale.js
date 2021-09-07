const { sales } = require('../database/models');
const { salesProducts } = require('../database/models');

const createSale = async (sale, products) => {
  const saleCreated = await sales.create(sale);

  await products.forEach((product) => {
    const objectUnserializedSalesProducts = {
      product_id: product.id,
      sale_id: saleCreated.dataValues.id,
      quantity: product.quantity,
    }
    salesProducts.create(objectUnserializedSalesProducts);
  });
  return saleCreated;
};

module.exports = {
  createSale,
};
