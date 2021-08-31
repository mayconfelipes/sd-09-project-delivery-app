const { product, sale } = require('../database/models');

const getProductsAll = async () => {
  const products = await product.findAll({});
  return products;
};

const saveOrder = async ({ 
  user_id,
  seller_id,
  total_price,
  delivery_address,
  delivery_number,
  sale_date,
  status }) => {
  const order = await sale.create({
    user_id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    sale_date,
    status,
  });

  return order;
};

module.exports = { getProductsAll, saveOrder };
