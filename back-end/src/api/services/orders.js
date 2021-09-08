const { sales, users, salesProducts, products } = require('../../database/models');

const getOneOrderById = async (id) => {
  // const order = await sales.findOne({ 
  //   where: { id },
  //   include: [
  //     {attributes: ['name'],
  //   model: users,
  //   as:'selercon'}
  //   ],
  // });
  const order = await sales.findOne({ where: { id } });
  
  const salesProductsArray = await salesProducts.findAll({ where: { saleId: id } });
  
  const productsInfo = salesProductsArray.map(async (item) => {
    const { name, price } = await products.findOne({ where: { id: item.productId } });
    return { nameProduct: name,
      priceProduct: price, 
      productId: item.productId,
      quantity: item.quantity };
  });
  
  const result = await Promise.all(productsInfo);
  
  const userName = await users.findOne({ where: { id: order.seller_id } });
  
  return { 
    id: order.id,
    saleDate: order.saleDate,
    status: order.status, 
    sellerName: userName.name,
    totalPrice: order.totalPrice,
    products: result };
};

const getAllOrdersByCustomerId = async (email) => {
  const userId = await users.findOne({ where: { email } });
  const { id } = userId.dataValues;
  const allOrders = await sales.findAll({ where: { userId: id } });
  return allOrders;
};

module.exports = {
  getOneOrderById,
  getAllOrdersByCustomerId,
};
