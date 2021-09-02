const { product, sale } = require('../database/models');

const getProductsAll = async () => {
  const products = await product.findAll({});
  return products;
};

const saveOrder = async (orderData) => {
  const formatedOrder = {
    user_id: orderData.userId,
    seller_id: orderData.sellerId,
    total_price: orderData.totalCart,
    delivery_address: orderData.deliveryAddress,
    delivery_number: orderData.deliveryNumber,
    sale_data: new Date(),
    status: 'PENDENTE',
  };
  const order = await sale.create(formatedOrder);
 return order;
};

const createSalesProducts = async (order, listItens) => {
  // const list =  listItens.map((item) => ({ sale_id: order.id, product_id: item.id, quantity: item.quantity }))
  // await salesProducts.bulkCreate(list);
  console.log(order, listItens);
};

module.exports = { getProductsAll, saveOrder, createSalesProducts };
