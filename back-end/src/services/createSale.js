const { sales } = require('../database/models');
const { salesProducts } = require('../database/models');

const createSale = async (sale, products) => {
  const saleCreated = await sales.create(sale);

  await products.forEach((product) => {
    salesProducts.create({
      saleId: saleCreated.dataValues.id,
      productId: product.id,
      quantity: product.quantity,
    });
  });
  return saleCreated;
};

const createSalesProducts = async (salesProductsObject) => {
  const objectToCreateSalesProducts = {
    // product_id: salesProductsObject.productId,
    // sale_id: salesProductsObject.saleId,
    quantity: salesProductsObject.quantity,
  };
  const saleCreated = await salesProducts.create(objectToCreateSalesProducts);
  return saleCreated;
};

module.exports = {
  createSale,
  createSalesProducts,
};
