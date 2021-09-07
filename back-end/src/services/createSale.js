const { sales } = require('../database/models');
const { salesProducts } = require('../database/models');

const createSale = async (sale, products) => {
  const saleCreated = await sales.create(sale);

  await products.forEach((product) => {
    const snakeCaseProductId = 'product_id';
    const snakeCaseSaleId = 'sale_id';

    const objectUnserializedSalesProducts = {
      [snakeCaseProductId]: product.id,
      [snakeCaseSaleId]: saleCreated.dataValues.id,
      quantity: product.quantity,
    };
    salesProducts.create(objectUnserializedSalesProducts);
  });
  return saleCreated;
};

module.exports = {
  createSale,
};
